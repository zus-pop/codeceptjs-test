Feature("web-test");

Scenario("Test login admin dashboard", ({ I }) => {
    I.amOnPage("/");
    I.wait(2);
    I.fillField("email", "admin@gmail.com");
    I.fillField("password", "admin123");
    I.click("Login");
    I.wait(2);
    I.see("Welcome to Dashboard");
});

Scenario("Test login admin dashboard unauthorized", ({ I }) => {
    I.amOnPage("/");
    I.wait(2);
    I.fillField("email", "jane@gmail.com");
    I.fillField("password", "jane123");
    I.click("Login");
    I.wait(2);
    I.see("You need permission to log in this website");
});
