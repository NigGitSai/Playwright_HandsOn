import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config();
export default defineConfig({
  testDir: './tests/Advanced/Parallel',

  timeout: 120 * 1000,


  expect: {
    timeout: 15000,
  },

  fullyParallel: false,
  workers: 2,

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
    testIdAttribute: 'data-test',
    actionTimeout: 60000,
    navigationTimeout: 120000,
    launchOptions: {
      slowMo: 500, // Slows down operations by 1000ms (1 second)
    },
  },

  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },

    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'auth-setup',

      testMatch: 'Advanced/Parallel/auth.setup.ts',

      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'SessionStorage-and-Parallel',
      testMatch: 'Advanced/Parallel/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: path.join(process.cwd(), 'utils', 'session', 'authsession.json'),

      },
      dependencies: ['auth-setup'],
      workers: 2
    }

  ],
});