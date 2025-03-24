const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

jest.dontMock("fs");

describe("Index page tests", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  test("Directory mount element exists", function () {
    expect(document.getElementById("directory-navigator")).toBeTruthy();
  });

  test("Directory mount element exists", function () {
    expect(
      document.querySelector(".table__header__file-date").textContent
    ).toBe("Date Modified");
  });
});
