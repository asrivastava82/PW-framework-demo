import { test, expect } from "../Fixtures/api-fixture";
import { generateToken } from "../helpers/createToken";

test.describe("API test cases", () => {
  let token: string;
  test.beforeAll("Generate Token", async ({ api }) => {
    const tokenResponse = await api
      .path("/users/login")
      .body({
        user: { email: "asrivastava82@gmail.com", password: "Lucknow@12345" },
      })
      .postRequest(200);
    token = "Token " + tokenResponse.user.token;

    //token = await generateToken();
    console.log("Generated Token: ", token);
  });

  test("Get all the articles", async ({ api }) => {
    const response = await api
      .path("/articles")
      .params({ limit: 10, offset: 0 })
      .getRequest(200);
    console.log(response);
  });

  test("Create, Update and Delete article ", async ({ api }) => {
    const postResponse = await api
      .path("/articles")
      .params({ limit: 10, offset: 0 })
      .header({ Authorization: token, "Content-Type": "application/json" })
      .body({
        article: {
          description: "Test Des1",
          body: "Test Body11",
          tagList: ["test11"],
        },
      })
      .postRequest(201);
    const slugId = postResponse.article.slug;
    console.log(postResponse);

    const getResponse = await api
      .path(`/articles/${slugId}`)
      .header({ Authorization: token })
      .params({ limit: 10, offset: 0 })
      .getRequest(200);
    console.log(getResponse);

    const updateResponse = await api
      .path(`/articles/${slugId}`)
      .params({ limit: 10, offset: 0 })
      .header({ Authorization: token })
      .body({
        article: {
          title: "Test Title22",
          description: "Test Des22",
          body: "Test Body22",
          tagList: ["test22"],
        },
      })
      .putRequest(200);
    const updatedSlugId = updateResponse.article.slug;
    console.log(updateResponse);

    const deleteResponse = await api
      .path(`/articles/${updatedSlugId}`)
      .header({ Authorization: token })
      .deleteRequest(204);
  });
});
