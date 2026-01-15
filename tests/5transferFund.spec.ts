import { expect, test } from "../Fixtures/api-fixture";
import { readFile, getSessionId } from "../utlis/helpers";
import path from "path";
const acctPath = path.join(__dirname, "../testData/acctNumber.json");

const sessionId = getSessionId();

test.describe.serial("Account Flow", () => {
  test("Verify that funds are transferred successfully", async ({
    api,
    loginPage,
  }) => {
    await loginPage.navigatetoApp(process.env.BASE_URL!);
    const transferFund = await api
      .url(process.env.BASE_URL!)
      .path("/parabank/services_proxy/bank/transfer")
      .params({
        fromAccountId: readFile(acctPath),
        toAccountId: 16119,
        amount: 15,
      })
      .header({ Cookie: `JSESSIONID=${sessionId}` })
      .postRequest(200);
  });
});
