import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testMatch: [
                //'tests/integration/login.test.ts', 
                //'tests/lambdaAlert.test.ts',
                //'tests/select.test.ts',
                //'iframes.test.ts',
                //'window.test.ts',
                'calendar.test.ts',
            ],
    use: {
        headless: false,
        screenshot: "on",
        video:"retain-on-failure",              
        launchOptions: {
            //slowMo: 1000
        }
    },
    retries: 0,
    reporter : [["dot"], ["json", {outputFile: 'jsonReports/jsonReport.json'}],
    ["html", {open: "never"}]]
};

export default config;
