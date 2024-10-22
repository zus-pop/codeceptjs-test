import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
import "dotenv/config";
import OpenAI from "openai";
import "./heal";
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
    tests: "./tests/*_test.ts",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "https://pod-booking-admin-dashboard.vercel.app",
            browser: "chrome",
        },
        REST: {
            endpoint: "https://poddy.store/api/v1",
            defaultHeaders: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        },
        JSONResponse: {},
    },
    ai: {
        request: async (messages) => {
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY,
            });
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-0125",
                messages,
            });
            return completion?.choices[0].message.content;
        },
    },
    include: {
        I: "./steps_file",
    },
    name: "api-test",
    plugins: {
        heal: {
            enabled: false,
        },
        allure: {
            enabled: true,
            require: "allure-codeceptjs",
        },
    },
};
