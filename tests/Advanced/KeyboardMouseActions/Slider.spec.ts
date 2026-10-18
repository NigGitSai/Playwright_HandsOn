import {test, expect} from '@playwright/test';

test('Slider test',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/");
    const slider = page.locator("//div[@id='slider1']//input[@type='range']");
    const outputRange =  page.locator("#range").first();
   let outputStr = await outputRange.textContent();
    let output = Number(outputStr);
   console.log(`output : ${output}`)
    let i=0;
    while(output<15){
        i = i+5;
        await slider.dragTo(slider,{
            sourcePosition:{x:0+i,y:0},
            targetPosition:{x:10+i,y:0}
        });
        outputStr = await outputRange.textContent();
        output = Number(outputStr)
         console.log(`output : ${output}`)
    }
})