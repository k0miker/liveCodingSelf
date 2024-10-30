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

describe("Task 1; Background Image", () => {
  it("Page Should contain an image as a background image", async () => {
    const allBackgroundProperties = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background-image")
      )
    );
    expect(
      allBackgroundProperties.some((e) => e.includes("background-sunset.jpg"))
    ).toBe(true);
  });
  it("Image should be centered on the page", async () => {
    const backgroundCentered = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background-position")
      )
    );
    expect(backgroundCentered.some((e) => e.includes("50% 50%, 50% 50%"))).toBe(
      true
    );
  });
  it("Image should be of size 'cover'", async () => {
    const backgroundSize = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background-size")
      )
    );
    expect(backgroundSize.some((e) => e.includes("cover"))).toBe(true);
  });
});
