import { test, Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class UserRegistration extends BasePage {
  readonly userRegistrationlink: Locator;
  readonly userRegistrationFName: Locator;
  readonly userRegistrationLName: Locator;
  readonly userRegistrationAddressStreet: Locator;
  readonly userRegistrationAddressCity: Locator;
  readonly userRegistrationAddressState: Locator;
  readonly userRegistrationZipCode: Locator;
  readonly userRegistrationSSN: Locator;
  readonly userRegistrationUName: Locator;
  readonly userRegistrationPwd: Locator;
  readonly userRegistrationRePwd: Locator;
  readonly userRegistrationBtn: Locator;
  readonly userRegistrationConfirmationMsg: Locator;
  readonly userRegistrationErrorMsg: Locator;

  constructor(page: Page) {
    super(page);
    this.userRegistrationlink = this.page.getByRole("link", {
      name: "Register",
    });
    this.userRegistrationFName = this.page.locator('[id="customer.firstName"]');
    this.userRegistrationLName = this.page.locator('[id="customer.lastName"]');
    this.userRegistrationAddressStreet = this.page.locator(
      '[id="customer.address.street"]'
    );
    this.userRegistrationAddressCity = this.page.locator(
      '[id="customer.address.city"]'
    );
    this.userRegistrationAddressState = this.page.locator(
      '[id="customer.address.state"]'
    );
    this.userRegistrationZipCode = this.page.locator(
      '[id="customer.address.zipCode"]'
    );
    this.userRegistrationSSN = this.page.locator('[id="customer.ssn"]');
    this.userRegistrationUName = this.page.locator('[id="customer.username"]');
    this.userRegistrationPwd = this.page.locator('[id="customer.password"]');
    this.userRegistrationRePwd = this.page.locator("#repeatedPassword");
    this.userRegistrationBtn = this.page.getByRole("button", {
      name: "Register",
    });
    this.userRegistrationConfirmationMsg =
      this.page.locator("h1[class='title']");
    this.userRegistrationErrorMsg = this.page.getByText(
      "This username already exists."
    );
  }

  async navigateToUserRegistration() {
    await this.clickElement(this.userRegistrationlink);
  }

  async userRegistration(
    fname: string,
    lname: string,
    addStreet: string,
    addCity: string,
    addState: string,
    addZipCode: number,
    ssn: number,
    uname: string,
    password: string,
    repassword: string
  ) {
    await this.userRegistrationFName.fill(fname);
    await this.userRegistrationLName.fill(lname);
    await this.userRegistrationAddressStreet.fill(addStreet);
    await this.userRegistrationAddressCity.fill(addCity);
    await this.userRegistrationAddressState.fill(addState);
    await this.userRegistrationZipCode.fill(addZipCode.toString());
    await this.userRegistrationSSN.fill(ssn.toString());
    await this.userRegistrationUName.fill(uname);
    await this.userRegistrationPwd.fill(password);
    await this.userRegistrationRePwd.fill(repassword);
    await this.userRegistrationBtn.click();
  }
}

// await .fill('201306');

// await .fill('123456789');

// await .fill('asharma4068');

// await .fill('Noida@12345');

// await .fill('Noida@12345');
// await .click();
// await expect(page.locator('h1')).toContainText('Welcome asharma4068');
