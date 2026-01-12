import { test, Page, Locator, expect } from "@playwright/test";
import { log } from "console";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string = "/") {
    log("info", `Navigating to the page: ${url}`);
    if (url.startsWith("/") && !process.env.BASE_URL) {
      throw new Error(
        "Relative URL provided but BASE_URL is not configured. Set TEST_ENV or configure baseURL in playwright.config.ts."
      );
    }
    await this.page.goto(url);
  }

  async typeText(locator: Locator, text: string) {
    log("info", `Typing text: ${text}`);
    try {
      await expect(locator).toBeVisible();
      await locator.fill(text);
    } catch (error) {
      throw new Error(`Failed to type text: ${error}`);
    }
  }

  async clickElement(locator: Locator) {
    log("info", `Clicking element: ${locator}`);
    try {
      await expect(locator).toBeVisible();
      await locator.click();
    } catch (error) {
      throw new Error(`Failed to click element: ${error}`);
    }
  }
}
