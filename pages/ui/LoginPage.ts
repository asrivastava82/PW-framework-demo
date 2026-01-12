import { test, Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMsg: Locator;
  readonly errorMsgBlank: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = this.page.locator('input[type="text"]');
    this.passwordInput = this.page.locator('input[type="password"]');
    this.loginBtn = this.page.getByRole("button", { name: "Log In" });
    this.errorMsg = this.page.locator("#rightPanel p");
    this.errorMsgBlank = this.page.locator("#rightPanel p");
  }

  async navigatetoApp(url: string) {
    await this.navigateTo(url);
  }
  async loginToApp(email: string, password: string) {
    await this.typeText(this.emailInput, email);
    await this.typeText(this.passwordInput, password);
    await this.clickElement(this.loginBtn);
  }
}
