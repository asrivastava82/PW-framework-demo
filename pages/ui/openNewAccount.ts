import { test, Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class OpenAccountPage extends BasePage {
  readonly accountTypeDropdown: Locator;
  readonly existingAccountDropdown: Locator;
  readonly openNewAccountBtn: Locator;
  readonly accountCreatedMsswithAccNum: Locator;
  readonly accountCreationSuccessMsg: Locator;
  readonly accountDetailsTable: Locator;

  constructor(page: Page) {
    super(page);
    this.accountTypeDropdown = this.page.locator("#type");
    this.existingAccountDropdown = this.page.locator("#fromAccountId");
    this.openNewAccountBtn = page.getByRole("button", {
      name: "Open New Account",
    });
    this.accountCreatedMsswithAccNum = this.page.locator(
      "#openAccountResult p a"
    );
    this.accountCreationSuccessMsg = this.page.locator("#openAccountResult h1");
    this.accountDetailsTable = this.page.locator("table tbody tr");
  }

  async openNewAccount(accountType: string, index: number) {
    await this.accountTypeDropdown.selectOption(accountType);
    await this.existingAccountDropdown.selectOption({
      index: index,
    });
    await this.clickElement(this.openNewAccountBtn);
  }

  async captureAccountNbr() {
    await expect(this.accountCreatedMsswithAccNum).toBeVisible({
      timeout: 5000,
    });
    const accNbr = (await this.accountCreatedMsswithAccNum.innerText()).trim();
    if (!accNbr)
      throw new Error("Account number not found after opening account");
    return accNbr;
  }

  async verifyAccountDetails(accountNbr: string) {
    const tableRows = this.accountDetailsTable.all();
    for (let tableRow of await tableRows) {
      const text = await tableRow.locator("td").nth(1).textContent();
      if (text == accountNbr) {
        return true;
      }
    }
  }
}
