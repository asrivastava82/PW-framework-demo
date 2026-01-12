import { test, Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountDetailsPage extends BasePage {
  readonly accountDetailsHeading: Locator;
  readonly accountDetailsTable: Locator;

  constructor(page: Page) {
    super(page);
    this.accountDetailsHeading = this.page.locator("#accountDetails h1");
    this.accountDetailsTable = this.page.locator("table tbody tr");
  }

  async verifyAccountDetails(accountNbr: string) {
    // await expect(this.accountDetailsHeading).toBeVisible({
    //   timeout: 5000,
    // });
    const tableRows = this.accountDetailsTable.all();
    for (let tableRow of await tableRows) {
      const text = await tableRow.locator("td").nth(1).textContent();
      if (text == accountNbr) {
        return true;
      }
    }
  }
}
