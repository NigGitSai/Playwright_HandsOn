import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,
  

  expect: {
    timeout: 5000,
  },

  fullyParallel: false,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://example.com',

    headless: false,
    

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 60000,
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