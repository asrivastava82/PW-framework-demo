import { expect, test } from "../Fixtures/hooks-fixtures";
import userRegData from "../testData/userRegistrationData.json";
import { readFile } from "../utlis/helpers";

test.describe.serial("Account Flow", () => {
  test("verify the User Registration", async ({ loginPage, userRegister }) => {
    await loginPage.navigatetoApp(process.env.BASE_URL!);
    await userRegister.navigateToUserRegistration();
    await userRegister.userRegistration(
      userRegData.fname,
      userRegData.lname,
      userRegData.street,
      userRegData.city,
      userRegData.state,
      userRegData.zipcode,
      userRegData.ssn,
      userRegData.uname,
      userRegData.password,
      userRegData.repassword
    );
    await expect(userRegister.userRegistrationConfirmationMsg).toContainText(
      `Welcome ${userRegData.uname}`
    );
  });

  test("verify the Error Messsage if user already exists", async ({
    loginPage,
    userRegister,
  }) => {
    await loginPage.navigatetoApp(process.env.BASE_URL!);
    await userRegister.navigateToUserRegistration();
    await userRegister.userRegistration(
      userRegData.fname,
      userRegData.lname,
      userRegData.street,
      userRegData.city,
      userRegData.state,
      userRegData.zipcode,
      userRegData.ssn,
      userRegData.uname,
      userRegData.password,
      userRegData.repassword
    );
    await expect(userRegister.userRegistrationErrorMsg).toHaveText(
      "This username already exists."
    );
  });
});
