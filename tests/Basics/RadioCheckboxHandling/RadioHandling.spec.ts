import {test, expect, Locator} from '@playwright/test'

test('Handle radio inputs', async ({page})=> {
    await page.goto('https://letcode.in/radio');

   const yesRadio = page.getByRole('radio',{name: 'Yes',exact:false}).first();
    await yesRadio.check();

    const yesRadioStatus = yesRadio.isChecked();
    console.log(`Is Yes Radio selected : ${yesRadioStatus}`);
    await expect(yesRadio).toBeChecked();

    const noRadio = page.getByRole('radio',{name: 'No',exact:false}).first();
    await noRadio.check();

    await expect(noRadio).toBeChecked();
    await expect(yesRadio).not.toBeChecked();

   const barRadio = page.getByRole('radio',{name: 'Bar',exact: false}).first();
    await expect(barRadio).toBeChecked();
})