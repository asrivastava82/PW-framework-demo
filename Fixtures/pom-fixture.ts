import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/ui/LoginPage";
import { HomePage } from "../pages/ui/HomePage";
import { OpenAccountPage } from "../pages/ui/openNewAccount";
import { AccountsOverviewPage } from "../pages/ui/accountsOverview";
import { AccountDetailsPage } from "../pages/ui/accountDetails";
import { UserRegistration } from "../pages/ui/userRegistration";

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  openAccountPage: OpenAccountPage;
  accountsOverviewPage: AccountsOverviewPage;
  accountDetails: AccountDetailsPage;
  userRegister: UserRegistration;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  openAccountPage: async ({ page }, use) => {
    const openAccountPage = new OpenAccountPage(page);
    await use(openAccountPage);
  },

  accountsOverviewPage: async ({ page }, use) => {
    const accountsOverviewPage = new AccountsOverviewPage(page);
    await use(accountsOverviewPage);
  },

  accountDetails: async ({ page }, use) => {
    const accountDetails = new AccountDetailsPage(page);
    await use(accountDetails);
  },

  userRegister: async ({ page }, use) => {
    const userRegister = new UserRegistration(page);
    await use(userRegister);
  },
});

export { expect } from "@playwright/test";
