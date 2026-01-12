import { expect, test } from "../../Fixtures/hooks-fixtures";
import { writeFile } from "../../utlis/helpers";
import path from "path";
const acctPath = path.join(__dirname, "../../testData/acctNumber.json");

test("Verify that user is able to open a new Saving account", async ({
  loginPage,
  homePage,
  openAccountPage,
  accountDetails,
}) => {
  await loginPage.navigatetoApp(process.env.BASE_URL!);
  await homePage.navigateToOpenNewAccount();
  await openAccountPage.openNewAccount("SAVINGS", 0);
  const acct = await openAccountPage.captureAccountNbr();
  writeFile(acctPath, acct);
  await expect(openAccountPage.accountCreationSuccessMsg).toHaveText(
    "Account Opened!"
  );
  await openAccountPage.accountCreatedMsswithAccNum.click();
  await accountDetails.page.waitForLoadState("networkidle");
  const isAccPresent = await accountDetails.verifyAccountDetails(acct);
  expect(isAccPresent).toBeTruthy();
});

test("Verify that user is able to open a new Checking account", async ({
  loginPage,
  homePage,
  openAccountPage,
}) => {
  await loginPage.navigatetoApp(process.env.BASE_URL!);
  await homePage.navigateToOpenNewAccount();
  await openAccountPage.openNewAccount("CHECKING", 1);
});
