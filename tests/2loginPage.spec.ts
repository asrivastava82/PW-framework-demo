import { expect, test } from "../Fixtures/hooks-fixtures";
//import EncryptDecrypt from "../../utlis/encrypt-decrypt";
//const encDec = new EncryptDecrypt();

test.describe.serial("Account Flow", () => {
  test.use({
    storageState: {
      cookies: [],
      origins: [],
    },
  });
  test("Verify the Login with invalid username", async ({
    loginPage,
    encDec,
  }) => {
    const decryptedPwd = encDec.decryptData(process.env.APP_PASSWORD!);
    await loginPage.navigatetoApp("https://parabank.parasoft.com/");
    await loginPage.loginToApp("testbanking", decryptedPwd);
    await expect(loginPage.errorMsg).toHaveText(
      "The username and password could not be verified."
    );
  });

  test("Verify the Login with invalid password", async ({
    loginPage,
    encDec,
  }) => {
    const decryptedUname = encDec.decryptData(process.env.APP_USERNAME!);
    await loginPage.navigatetoApp("https://parabank.parasoft.com/");
    await loginPage.loginToApp(decryptedUname, "parabanking");
    await expect(loginPage.errorMsg).toHaveText(
      "The username and password could not be verified."
    );
  });

  test("Verify the Login with blank username & password", async ({
    loginPage,
    encDec,
  }) => {
    await loginPage.navigatetoApp("https://parabank.parasoft.com/");
    await loginPage.loginToApp("", "");
    await expect(loginPage.errorMsgBlank).toHaveText(
      "Please enter a username and password."
    );
  });
});
