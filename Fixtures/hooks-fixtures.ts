import { test as baseTest } from "../Fixtures/util-fixtures";
import { LoginPage } from "../pages/ui/LoginPage";
import { HomePage } from "../pages/ui/HomePage";
import { OpenAccountPage } from "../pages/ui/openNewAccount";
import path from "path";

type hooksFixtures = {
  login: any;
};

// type workerFixture = {
//   createdAccount: any;
// };

const authFile = path.join(__dirname, "../auth/auth.json");
export const test = baseTest.extend<hooksFixtures>({
  login: async ({ loginPage }: { loginPage: any }, use: any) => {
    await loginPage.navigatetoApp("https://parabank.parasoft.com/");
    await use();
  },

  // createdAccount: [
  //   async ({ browser }: { browser: any }, use: any) => {
  //     const context = await browser.newContext({
  //       storageState: authFile,
  //     });
  //     const request = await context.request;
  //     const createAccountIdResponse = await request.post(
  //       "https://parabank.parasoft.com/parabank/services_proxy/bank/createAccount",
  //       {
  //         params: {
  //           customerId: 12545,
  //           newAccountType: 0,
  //           fromAccountId: 13677,
  //         },
  //       }
  //     );
  //     const jsonPostData = await createAccountIdResponse.json();
  //     const acctID = await jsonPostData.id;
  //     console.log(acctID);
  //     await use(acctID);
  //     // const getAccountIdDetails = await request.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${acctID}`)
  //     // const jsonGetData = await getAccountIdDetails.json()
  //     // const acctIDonDetailspage = jsonGetData.id;
  //   },
  //   { scope: "worker" },
  // ],
});
export { expect } from "@playwright/test";
