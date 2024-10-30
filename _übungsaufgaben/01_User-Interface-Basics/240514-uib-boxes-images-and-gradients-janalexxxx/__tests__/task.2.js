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

describe("Task 2; Background Image", () => {
  it("CSS `linear-gradient` propery should be defined for the image", async () => {
    const backgroundImage = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background-image")
      )
    );
    expect(backgroundImage.some((e) => e.includes("linear-gradient"))).toBe(
      true
    );
  });
});
