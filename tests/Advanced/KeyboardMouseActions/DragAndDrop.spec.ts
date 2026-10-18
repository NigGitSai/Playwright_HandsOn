import {test, expect} from '@playwright/test';

test.skip('Drag and Drop test using Mouse property',async({page})=>{
    await page.goto("https://demoqa.com/droppable");

    const draggable = page.locator("#draggable").first();
    const droppable = page.locator("#droppable").first();

    await draggable.hover();
    await page.mouse.down();
    await droppable.hover();
    await page.mouse.up();
    await expect(droppable).toHaveText('Dropped!');
})

test.skip('Drag and Drop test using drag to method',async({page})=>{
    await page.goto("https://demoqa.com/droppable");
    await page.waitForURL(/\/droppable$/,{timeout:5000})
    
    const draggable = page.locator("#draggable").first();
    const droppable = page.locator("#droppable").first();
    await draggable.waitFor({state:'visible',timeout:5000});
    await draggable.dragTo(droppable);
    await expect(droppable).toHaveText('Dropped!');
})

