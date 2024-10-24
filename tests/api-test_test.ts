Feature("api-test");

Scenario("test login and get user data successfully", async ({ I }) => {
    // login
    const response = await I.sendPostRequest("/auth/login", {
        email: "jane@gmail.com",
        password: "jane123",
    });
    I.seeResponseContainsKeys(["token", "message"]);
    const token = response.data.token;
    I.seeResponseCodeIsSuccessful();

    // get user data
    I.amBearerAuthenticated(secret(token));
    await I.sendGetRequest("/auth/profile");
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsKeys(["user_id", "email", "user_name", "role"]);
});

Scenario("test get user data without token", async ({ I }) => {
    // get user data
    await I.sendGetRequest("/auth/profile");
    I.seeResponseCodeIs(401);
    I.seeResponseContainsJson({
        message: "Access denied. No token provided.",
    });
});
