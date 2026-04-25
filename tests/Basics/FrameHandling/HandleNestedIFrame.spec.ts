import { test, expect,Frame } from '@playwright/test';

test('Handle Nested iFrame',async ({page})=>{
    await page.goto('https://letcode.in/frame');

    await page.evaluate(()=>{
        window.scrollBy(0,500);
    })
    const email = page.frameLocator('#firstFr')
    .frameLocator("//iframe[@src='innerframe']")
    .getByPlaceholder('Enter email');
    await email.waitFor({state:'attached',timeout:20000});

    await email.fill('soulWorld@universe.com');

   const emailValue = await email.inputValue();
    expect(emailValue).toBe('soulWorld@universe.com');
})

