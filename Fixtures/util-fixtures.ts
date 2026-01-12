import { test as baseTest } from "../Fixtures/pom-fixture";
import EncryptDecrypt from "../utlis/encrypt-decrypt";

type UtilFixture = {
  encDec: EncryptDecrypt;
};

export const test = baseTest.extend<UtilFixture>({
  encDec: async ({}, use) => {
    await use(new EncryptDecrypt());
  },
});

export { expect } from "@playwright/test";
