export type ITreeNode = {
  type: 'file' | 'folder';
  name: string;
  modified: Date;
  size: number;
  children?: ITreeNode[];
}

export const folderPayload: ITreeNode[] = [
  {
    type: "folder",
    name: "Documents",
    modified: new Date(1739999900000),
    size: 2,
    children: [
      {
        type: "file",
        name: "2024-W2.pdf",
        modified: new Date(1739999900000),
        size: 1000000,
      },
      {
        type: "file",
        name: "resume.rft",
        modified: new Date(1729999900000),
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
  },
  {
    type: "folder",
    name: "New Folder",
    modified: new Date(1689142400003),
    size: 0,
  },
];