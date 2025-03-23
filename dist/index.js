"use strict";
const FOLDER = 'folder';
const FILE = 'file';
const FOLDER_BUTTON_CLASS = 'folder-list__button';
const FOLDER_EXPANDABLE_BUTTON_CLASS = 'folder-list__button--expandable';
const folderPayload = [
    {
        type: "folder",
        name: "Documents",
        modified: new Date(1739999900000),
        size: 2,
        children: [
            {
                type: "folder",
                name: "Some Sub Folder",
                modified: new Date(1739999900000),
                size: 1000000,
                children: [
                    {
                        type: "folder",
                        name: "Again Some Sub Folder",
                        modified: new Date(1739999900000),
                        size: 1000000,
                    }
                ]
            },
            {
                type: "file",
                name: "2024-W2.pdf",
                modified: new Date(1739999900000),
                size: 1000000,
            },
            {
                type: "file",
                name: "resume.rft",
                modified: new Date(1679141400000),
                size: 300000,
            },
            {
                type: "file",
                name: "all-of-my-passwords.txt",
                modified: new Date(1779999900000),
                size: 100000,
            },
        ],
    },
    {
        type: "folder",
        name: "Pictures",
        modified: new Date(1679141400000),
        size: 0,
        children: [
            {
                type: "folder",
                name: "Vacation Pics",
                modified: new Date(1739999900000),
                size: 1000000,
            },
        ],
    },
    {
        type: "folder",
        name: "New Folder",
        modified: new Date(1689142400003),
        size: 0,
    },
];
const folderListTemplate = (folderName) => `<li><button class="button">${folderName}</button></li>`;
const folderTableTemplate = (folderName, fileSize, date) => {
    const formattedFileSize = `${fileSize} bytes`;
    const formattedDate = date.toLocaleDateString();
    return `
    <tr>
      <td>${folderName}</td>
      <td>${formattedFileSize}</td>
      <td>${formattedDate}</td>
    <tr>
  `;
};
const renderFolder = (folder) => {
    const expandableFolder = !!folder.children ? FOLDER_EXPANDABLE_BUTTON_CLASS : '';
    let html = `
    <li class="folder-list__item">
      <button
        class="${FOLDER_BUTTON_CLASS} ${expandableFolder}"
        title="${folder.name}"
      >
        <span class="folder-list__button__text">
          <i class="fa-solid fa-folder-open"></i>
          ${folder.name}
        </span>
      </button>
  `;
    if (folder.children && folder.children.length > 0) {
        html += '<ul class="folder-list--sub-list">';
        folder.children.forEach(child => {
            html += renderFolder(child);
        });
        html += '</ul>';
    }
    html += '</li>';
    return html;
};
const renderFolderList = (folders) => {
    let html = '';
    folders.forEach(folder => {
        html += renderFolder(folder);
    });
    return html;
};
// Helper function to recursively find all folders and keep children nested
const findFolders = (item) => {
    if (item.type === FOLDER) {
        let folder = { ...item };
        if (item.children) {
            folder.children = item.children.map(findFolders).filter(child => child !== null);
        }
        return folder;
    }
    return null;
};
// Reduce array to just folders
const getFolderTypes = (array) => array.map(findFolders).filter(item => item !== null);
const selectChildren = (array, folderName) => array.find(item => item.name === folderName);
const renderTable = (folderContents) => {
    folderContents.map((item) => {
        if (child.type === FOLDER) {
            renderTable(child?.children);
        }
    });
    // folderTableTemplate
};
const renderList = () => {
    const folderListClone = JSON.parse(JSON.stringify(folderPayload));
    const folderListReduced = getFolderTypes(folderListClone);
    const sidebar = document.getElementById('directory-navigator');
    const html = renderFolderList(folderListReduced);
    const buttons = document.querySelectorAll(`.${FOLDER_BUTTON_CLASS}`);
    // Add an event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.contains(FOLDER_EXPANDABLE_BUTTON_CLASS) &&
                button.classList.toggle('folder-list__button--collapsed');
            const folderContents = selectChildren(folderListClone, button.textContent?.trim());
            renderTable(folderContents?.children);
        });
    });
    sidebar.innerHTML = html;
};
document.addEventListener('DOMContentLoaded', () => {
    renderList();
    // folderButtonListener();
});
