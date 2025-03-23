const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom;
let container;

describe("index.html", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  test("Files button", function () {
    const filesButton = container.querySelector('[data-test="files-button"]');
    expect(filesButton).toBeTruthy();
    filesButton.click();
  });
});
