import { test, Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly confirmMsg: Locator;
  readonly openNewAccountLink: Locator;
  readonly accountsOverviewLink: Locator;
  readonly userRegistrationlink: Locator;

  constructor(page: Page) {
    super(page);
    this.confirmMsg = this.page.getByRole("heading", {
      name: "Accounts Overview",
      level: 1,
    });
    this.openNewAccountLink = this.page.getByRole("link", {
      name: "Open New Account",
    });
    this.accountsOverviewLink = this.page.getByRole("link", {
      name: "Accounts Overview",
    });

    this.userRegistrationlink = this.page.getByRole("link", {
      name: "Register",
    });
  }

  async navigateToOpenNewAccount() {
    await this.clickElement(this.openNewAccountLink);
  }

  async navigateToAccountsOverview() {
    await this.clickElement(this.accountsOverviewLink);
  }

  async navigateToUserRegistration() {
    await this.clickElement(this.userRegistrationlink);
  }
}
