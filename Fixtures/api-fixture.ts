import { test as baseTest } from "../Fixtures/hooks-fixtures";
import { RequestHandler } from "../utlis/api-client";

type TestOptions = {
  api: RequestHandler;
};

// type WorkerFixtures = {
// authToken: string;
// };

export const test = baseTest.extend<TestOptions>({
  api: async ({ request }, use) => {
    const baseUrl = "https://conduit-api.bondaracademy.com/api";
    const requestHandler = new RequestHandler(request, baseUrl);
    use(requestHandler);
  },

  // authToken: [async ({}, use) => {
  //     const token = 'sample-token';
  //     await use(token);
  // }, { scope: 'worker' }],
});

export { expect } from "@playwright/test";
