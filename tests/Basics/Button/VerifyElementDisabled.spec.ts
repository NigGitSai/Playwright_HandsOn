import {test, expect,Locator} from '@playwright/test';

test('Verify button is disabled',async({page})=>{

    await page.goto(`https://letcode.in/button`);
   const button1 = await page.getByTitle('Disabled button').first();
  const isDisabled =  await button1.isDisabled();
  expect(isDisabled).toBe(true);
})