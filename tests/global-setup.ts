import { expect, test } from "../Fixtures/pom-fixture";
import path from "path";
import EncryptDecrypt from "../utlis/encrypt-decrypt";

const encDec = new EncryptDecrypt();
const decryptedUname = encDec.decryptData(process.env.APP_USERNAME!);
const decryptedPwd = encDec.decryptData(process.env.APP_PASSWORD!);

test.skip(
  !!process.env.SKIP_GLOBAL_SETUP,
  "Skipping global setup because SKIP_GLOBAL_SETUP is set"
);
const authFile = path.join(__dirname, "../auth/auth.json");

test("Global Setup", async ({ page, loginPage, homePage }) => {
  await loginPage.navigatetoApp(process.env.BASE_URL!);
  await loginPage.loginToApp(decryptedUname, decryptedPwd);
  await page.waitForURL("**/overview.htm");
  await page.context().storageState({ path: authFile });
  await expect(homePage.confirmMsg).toHaveText("Accounts Overview");
});
