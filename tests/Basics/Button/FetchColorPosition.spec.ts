import {test, expect,Locator} from '@playwright/test';

test('Fetch Color',async({page})=>{
    await page.goto('https://letcode.in/button');
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    const colorBtn = page.getByRole('button',{name:'Find the color of the button'}).first();
    const bgColor = await colorBtn.evaluate(el=>getComputedStyle(el).backgroundColor)
    console.log(`Background Color : ${bgColor}`);

   const boundingBox = await colorBtn.boundingBox();
   console.log(`x position ${boundingBox?.x}`);
   console.log(`y position ${boundingBox?.y}`);
   console.log(`height position ${boundingBox?.height}`);
   console.log(`width position ${boundingBox?.width}`);
}
)