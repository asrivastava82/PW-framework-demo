import { expect, test } from "../../Fixtures/hooks-fixtures";
import { readFile } from "../../utlis/helpers";
import path from "path";
const acctPath = path.join(__dirname, "../../testData/acctNumber.json");

test("verify that Accounts Overview page is displayed", async ({
  loginPage,
  homePage,
  openAccountPage,
  accountsOverviewPage,
}) => {
  await loginPage.navigatetoApp(process.env.BASE_URL!);
  // await homePage.navigateToOpenNewAccount();
  // await openAccountPage.openNewAccount("SAVINGS", 0);
  // const newAcct = await openAccountPage.captureAccountNbr();
  await homePage.navigateToAccountsOverview();
  await expect(accountsOverviewPage.accountsOverviewHeading).toHaveText(
    "Accounts Overview"
  );
  await accountsOverviewPage.page.waitForLoadState("networkidle");
  //const accNbr = readFile(acctPath);

  const acctPresent =
    await accountsOverviewPage.verifyAccountDisplayOnAcctOverviewPage(
      readFile(acctPath)
    );
  expect(acctPresent).toBeTruthy();
  const total = await accountsOverviewPage.verifyTotalAccount();
  console.log(total);
});
