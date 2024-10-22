Feature("ai-test");

Scenario.only("test login ai stuff", async ({ I }) => {
    I.amOnPage("https://pod-booking-admin-dashboard.vercel.app/");
    // I.click("Login");
    // I.wait(2);
    // I.fillField("#email", "foo@gmail.com");
    // I.fillField('//input[@type="password"]', "huhuhu");
    // I.click("Login");
    // I.wait(5);
    I.fillField(".MuiInputBase-input", "admin@gmail.com"); // Fill valid email
    I.fillField(".MuiInputBase-input[name='password']", "admin123"); // Fill valid password
    I.click("Login"); // Click on Login button

    I.wait(2); // Wait for 2 seconds

    I.see("Welcome"); // Check if 'Welcome' is visible on the page
    // pause();
});

Scenario("test register ai stuff", async ({ I }) => {
    I.amOnPage("https://pod-booking-admin-dashboard.vercel.app/");
    I.click("Login");

    I.wait(1);
    I.click("Don't have an account? Register now");

    I.fillField({ id: "username" }, "barzar");
    I.fillField({ id: "email" }, "testCloneAnother@example.com");
    I.fillField("input[id='phoneNumber']", "0123456789");
    I.fillField({ id: "password" }, "password123");
    I.fillField("input[id='rePassword']", "password123");
    // Add more fields as needed

    I.click("Register");
    I.wait(5);
    // pause();
});
