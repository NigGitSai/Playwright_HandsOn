import {
    test as base,
    BrowserContext,
    Page
} from '@playwright/test';

type SessionFixtures = {
    sessionContext: BrowserContext;
    sessionPage: Page;
};

export const test = base.extend<SessionFixtures>({

    sessionContext: [
        async ({ browser }, use) => {

            const context = await browser.newContext();

            await use(context);

            await context.close();
        },
        { scope: 'worker' }
    ],

    sessionPage: async ({ sessionContext }, use) => {

        const page = await sessionContext.newPage();

        await use(page);

        await page.close();
    }
});

export { expect } from '@playwright/test';