import { test } from "@playwright/test";
import EncryptDecrypt from "../utlis/encrypt-decrypt";

// const loginTestData = TestData.testDataLogin();

// for ( let td of loginTestData){

//     test.describe("API test cases", () => {

//     test(`Demo API test case1 ${td.testid}`, async({page}) => {
//         await page.goto('https://www.saucedemo.com/')
//         await page.getByPlaceholder('Username').fill(td.username);
//         await page.waitForTimeout(2000)
//     })
// })
// }

// console.log(readFile("testData/gh.json"));
// writeFile(
//   "testData/ad.json",
//   JSON.stringify(
//     { name: "Ashu", age: 22, city: "Greater Noida", state: "UP" },
//     null,
//     4
//   )
//);

const encDec = new EncryptDecrypt();
// const eusername = encDec.encryptData("parabank");
// console.log(eusername);
const dusername = encDec.decryptData(
  "U2FsdGVkX19e8vwqWT+KHGtghx8UzCEmz4590nBhI5g="
);
console.log(dusername);
