import { test, Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountsOverviewPage extends BasePage {
  readonly accountsOverviewHeading: Locator;
  readonly accountOverviewTable: Locator;
  readonly accountOverviewTotal: Locator;

  constructor(page: Page) {
    super(page);
    this.accountsOverviewHeading = this.page.locator("#showOverview h1");
    this.accountOverviewTable = this.page.locator("table tbody tr");
    this.accountOverviewTotal = this.page.locator("tbody tr td b").last();
  }

  async verifyAccountDisplayOnAcctOverviewPage(acctNbr: string) {
    await expect(this.accountsOverviewHeading).toBeVisible({ timeout: 5000 });
    const tableRows = this.accountOverviewTable.all();
    for (let tableRow of await tableRows) {
      const text = await tableRow.locator("td").nth(0).textContent();
      if (text == acctNbr) {
        return true;
      }
    }
  }

  async verifyTotalAccount() {
    let sum = 0;
    await expect(this.accountsOverviewHeading).toBeVisible({ timeout: 5000 });
    const count = await this.accountOverviewTable.count();
    const total = await this.accountOverviewTotal.textContent();
    const totalCleaned = parseFloat(total!.replace(/[^0-9.]/g, ""));
    console.log(totalCleaned);
    const values: number[] = [];
    for (let i = 0; i < count - 1; i++) {
      const row = this.accountOverviewTable.nth(i);
      const text = (await row.locator("td").nth(1).innerText()).trim();
      const noNumerical = text.replace(/[^0-9.]/g, "");
      const cleanedValue = parseFloat(noNumerical);
      values.push(cleanedValue);
    }
    console.log(`The amount in various accounts is ${values}`);
    for (let val of values) {
      sum = sum + val;
    }

    return sum == totalCleaned ? sum : "Not Match";
  }
}
