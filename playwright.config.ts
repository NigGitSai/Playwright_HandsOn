import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  testDir: './tests',

  timeout: 120 * 1000,
  

  expect: {
    timeout: 15000,
  },

  fullyParallel: false,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: false,
    

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 60000,
    navigationTimeout: 120000,
     launchOptions: {
      slowMo: 3000, // Slows down operations by 1000ms (1 second)
    },
  },

  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'],  channel: 'chrome' },
     
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});