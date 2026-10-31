import { defineConfig, devices } from '@playwright/test';

const browser = process.env.BROWSER || 'chromium';
const baseURL = process.env.BASE_URL || 'http://localhost/uth/gadgetsgallery/catalog/';

export default defineConfig({
  testDir: './tests',
  reporter: [['html'],['line'],['allure-playwright']],
  use: {
    baseURL:baseURL,
    browserName:browser,
    headless:false,
    screenshot:'on',
    trace: 'on-first-retry',
  }


});

