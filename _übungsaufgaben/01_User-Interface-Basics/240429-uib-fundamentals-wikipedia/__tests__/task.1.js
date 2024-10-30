const path = require("path");

/**
 * Find element from provided array of elements by its tag name and text content
 * @param {[Object]} elements array of elements to search
 * @param {[String]} possibleTags array of tag that can match; ["H1", "H2"]
 * @param {[String]} possibleTexts array of text content that element must contain; ["hello", "world"]
 * @returns the found element or undefined if not found
 */
const findElement = (elements, possibleTags, possibleTexts) => {
  const e = elements.find((el) => {
    if (!possibleTags.includes(el.tagName)) {
      return false;
    }

    //? Would .find() work here?
    return possibleTexts.reduce(
      (acc, text) =>
        acc &&
        el.textContent.trim().toLowerCase().includes(text.toLocaleLowerCase()),
      true
    );
  });

  return e;
};

describe("HTML tags", () => {
  let elements;
  // load index.html
  beforeAll(async () => {
    await page.goto("file://" + path.resolve("./index.html"));
    elements = await page.$eval("body", (body) => {
      const allElementsArray = Array.from(body.querySelectorAll("*"));
      return allElementsArray.map((el) => {
        return { tagName: el.tagName, textContent: el.textContent };
      });
    });
  });

  it("The 1st Element should be an H1", async () => {
    try {
      const element = findElement(elements, ["H1"], ["quick", "brown", "fox"]);
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 2nd Element should be an H4", async () => {
    try {
      const element = findElement(
        elements,
        ["H4"],
        ["Wikipedia", "free", "encyclopedia"]
      );
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 3rd Element should be a paragraph", async () => {
    try {
      const element = findElement(
        elements,
        ["P"],
        ["English", "quick", "contains"]
      );
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 4th element should be an H2", async () => {
    try {
      const element = findElement(elements, ["H2"], ["History"]);
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 5th Element should be a paragraph P", async () => {
    try {
      const element = findElement(
        elements,
        ["P"],
        ["earliest", "appearance", "phrase", "Boston"]
      );
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 6th Element should be a paragraph", async () => {
    try {
      const element = findElement(
        elements,
        ["P"],
        ["typewriters", "grew", "19th", "appearing"]
      );
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 7th Element should be a paragraph", async () => {
    try {
      const element = findElement(
        elements,
        ["P"],
        ["message", "hotline", "JUMPED"]
      );
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 8th Element should be a paragraph", async () => {
    try {
      const element = findElement(
        elements,
        ["P"],
        ["During", "technicians", "typewriters", "sentence"]
      );
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 9th Element should be an h2", async () => {
    try {
      const element = findElement(elements, ["H2"], ["Computer", "usage"]);
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });

  it("The 10th Element should be a paragraph", async () => {
    try {
      const element = findElement(elements, ["P"], ["computers", "pangram"]);
      expect(element).toBeTruthy();
    } catch {
      fail();
    }
  });
});
