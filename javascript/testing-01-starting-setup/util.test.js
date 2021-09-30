const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name an age", () => {
  const text = generateText("Ion", 32);
  expect(text).toBe("Ion (32 years old)");
});

// test("should output data-less text", () => {
//   const text = generateText("", null);
//   expect(text).toBe(" (null years old)");
// });

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Ion", 32);
  expect(text).toBe("Ion (32 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/ivizitiu/Projects/Udemy/javascript/testing-01-starting-setup/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Gamy");
  await page.click("input#age");
  await page.type("input#age", "33");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Gamy (33 years old)");
}, 10000);
