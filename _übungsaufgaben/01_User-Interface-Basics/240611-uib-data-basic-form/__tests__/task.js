const puppeteer = require("puppeteer");
const path = require("path");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto("file://" + path.resolve("./index.html"));
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

async function checkIsAscendantIsLabel(element) {
  try {
    const parent = await element.getProperty("parentNode");
    const parentTag = await parent.getProperty("tagName");
    const parentTagValue = await parentTag.jsonValue();
    console.log(parentTagValue)
    if (parentTagValue === "LABEL") {
      return true;
    }
    return checkIsAscendantIsLabel(parent);
  } catch (e) {
    // In puppeteer, there doesn't look to be an easier way to check if we reach the Document node
    return false;
  }
}

describe("Form - Personal Data", () => {
  it("Page should contain a header element", async () => {
    const elements = await page.$$("header");
    expect(elements.length).toBeGreaterThan(0);
  });
  it("Page should contain an email input element", async () => {
    const elements = await page.$$("input[type='email']");
    expect(elements.length).toBeGreaterThan(0);
  });
  it("Each input should have an associated label defined", async () => {
    const inputs = await page.$$("input");
    expect(inputs.length).toBeGreaterThan(0);
    for (let input of inputs) {
      // Get element that targets this using htmlFor
      const id = await input.getProperty("id");
      const idValue = await id.jsonValue();
      const label = await page.$(`label[for="${idValue}"]`);
      if (!label) {
        // htmlFor not found, check if any of the parent elements is a label
        const ascendantIsLabel = await checkIsAscendantIsLabel(input)
        expect(ascendantIsLabel).toBe(true);
      } else {
        expect(label).toBeTruthy();
      }
    }
  });
  it("Input tags on page should have their `type` attribute defined", async () => {
    const inputs = await page.$$("input");
    expect(inputs.length).toBeGreaterThan(0);
    for (let input of inputs) {
      const inputType = await input.getProperty("type");
      const inputTypeValue = await inputType.jsonValue();
      expect(inputTypeValue).toBeTruthy();
    }
  });
  it("Form Should contain a textarea", async () => {
    const comments = await page.$("textarea");
    expect(comments).toBeTruthy();
  });
});
