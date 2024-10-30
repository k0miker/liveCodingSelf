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

describe("Task 3; Circle with 3D effect", () => {
  it("CSS `radial-gradient` propery should be defined for the image", async () => {
    const backgroundImage = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background-image")
      )
    );
    expect(backgroundImage.some((e) => e.includes("radial-gradient"))).toBe(
      true
    );
  });
  it("CSS `radial-gradient` propery should have the correct parameters", async () => {
    const backgroundImage = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background-image")
      )
    );
    const radialGradientProperty = backgroundImage.find((el) =>
      el.includes("radial-gradient")
    );
    expect(radialGradientProperty).toEqual(
      "radial-gradient(circle at 65% center, rgb(255, 255, 255), rgb(249, 249, 249), rgb(85, 85, 85))"
    );
  });
});
