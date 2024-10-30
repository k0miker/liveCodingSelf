const fs = require("fs");
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

describe("Navigation links", () => {
  it("Page should contain a `Home`,`About` and `Contact` navigation items", async () => {
    const html = await page.content();
    expect(html).toMatch(/Home/i) &&
      expect(html).toMatch(/About/i) &&
      expect(html).toMatch(/Contact/i);
  });
});

describe("Styling", () => {
  it("Page should be styled with provided color `variables`", async () => {
    const varRules = fs.readFileSync(path.resolve("./style.css"), "utf8");
    expect(varRules.match(/var\(/g).length).toBeGreaterThan(1);
  });
});

describe("Responsiveness", () => {
  it("`Aside` menu should be hidden on screens smaller than `768px`", async () => {
    const hiddenEls = await page.$$eval("*", (el) =>
      Array.from(el).map(
        (e) =>
          getComputedStyle(e).getPropertyValue("display") === "none" ||
          getComputedStyle(e).getPropertyValue("display") === "hidden"
      )
    );
    // slicing to ignore the meta, title tags etc...
    expect(hiddenEls.slice(7).every((el) => el === false)).toBe(true);
    await page.setViewport({ width: 750, height: 800 });
    const hiddenBodyEls = await page.$$eval("*", (el) =>
      Array.from(el).map(
        (e) => getComputedStyle(e).getPropertyValue("display") === "none"
      )
    );
    expect(hiddenBodyEls.slice(7).some((el) => el === true)).toBe(true);
  });
});
