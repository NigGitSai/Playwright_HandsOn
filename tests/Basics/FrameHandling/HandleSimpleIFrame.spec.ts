import { test, expect, Frame } from '@playwright/test';

test.skip('Handle Simple Iframe', async ({ page }) => {
    await page.goto('https://letcode.in/frame');

    const name = page.frameLocator("#firstFr").getByPlaceholder("Enter name");
    await name.waitFor({ state: 'attached', timeout: 20000 });
    await name.fill('Soul');

    const nameFilled = await name.inputValue();
    expect(nameFilled).toBe('Soul');

})

test('Handle Iframe through looping',async ({page})=>{
    await page.goto('https://letcode.in/frame');
   
    const frames: Frame[] =  page.frames();
    let targetFrame;
    for(const iframe of frames){
      const name =   iframe.getByPlaceholder('Enter name').first();
       const nameCount = await name.count();
       if(nameCount > 0){
        targetFrame = iframe;
        await name.fill('oxygen');
        const nameValue  = await name.inputValue();
        console.log(`Name value entered ${nameValue}`);
        break;
       }
    }
})