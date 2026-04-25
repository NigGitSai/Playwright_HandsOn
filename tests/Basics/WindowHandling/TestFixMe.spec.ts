import {test, expect} from '@playwright/test'

test('Flaky test', async ({page})=>{
    test.skip();
})

    test('payment gateway test', async ({page})=>{
        test.slow();
    })


test('mobile only features', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Skipping because this is not a mobile device');

    // test steps here
});