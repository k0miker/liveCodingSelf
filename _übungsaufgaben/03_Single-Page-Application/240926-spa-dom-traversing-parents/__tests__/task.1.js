const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

describe("Parents", () => {
  const htmlStr = fs.readFileSync(
    path.resolve(__dirname, "../index.html"),
    "utf8"
  );
  const dom = new JSDOM(htmlStr);
  global.window = dom.window;
  global.document = window.document;
  global.console.log = jest.fn();

  beforeAll(() => {
    require("../index");
  });

  it("Should print all parents of element `cite`", () => {
    // get all parents of the element `cite`
    let parentList = [];
    let currentElement = dom.window.document.querySelector("cite");

    while (currentElement) {
      parentList.unshift(currentElement.nodeName.toLowerCase());
      currentElement = currentElement.parentElement;
    }

    // print to the console as a string
    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(
        new RegExp(`(${parentList.join(").*>.*(")})`, "igm")
      )
    );
  });
});
