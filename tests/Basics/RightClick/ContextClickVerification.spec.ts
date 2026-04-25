import {test, expect} from '@playwright/test'

test('verify context click', async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/context_menu');

    await page.waitForLoadState('domcontentloaded');

    const dialogBox = page.locator("#hot-spot").first();

   const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        dialogBox.click({button:'right'}) 
    ])

    console.log(`Dialog Message ${dialog.message()}`);
    await dialog.accept();
});