import {test,expect} from '@playwright/test';

test('To Have Count Assertion',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const loginButton = page.getByTestId('login-button');

    await expect(loginButton).toHaveCount(1);
})

test('to be enabled, visible assertion',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const loginButton = page.getByTestId('login-button');

    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toBeVisible();
})


test('to be disabled assertion',async({page})=>{
    await page.goto('https://letcode.in/button');

    const disabledButton = page.getByRole('button',{name: 'Disabled'})

    await expect(disabledButton).toBeDisabled();
})

test('to be hidden assertion',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const sauceLabsBackpack = page.getByRole('link',{name: 'Sauce Labs Backpack'})

    await expect(sauceLabsBackpack).toBeHidden();
    await page.close();
})

test('to have text assertion',async({page})=>{
    await page.goto('https://letcode.in/button');

    const labelText = page.getByText('Find the color of the button');

    await expect(labelText).toHaveText('Find the color of the button',{ignoreCase: false});
    await expect(labelText).toHaveText('Find the color of the button',{ignoreCase: true});
    //using regex ^ starts with case insensitive search.
    await expect(labelText).toHaveText(/^find the color of the button/i);
    await page.close();
})

test('to contain text assertion',async({page})=>{
    await page.goto('https://letcode.in/button');

    const labelText = page.getByText('Find the color of the button');

    await expect(labelText).toContainText('Find the color',{ignoreCase: false});
    await expect(labelText).toContainText(/of the button$/i);
    await page.close();
})

test('to have attribute, id, class value assertion',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const loginButton = page.getByTestId('login-button');

    await expect(loginButton).toHaveAttribute('value','Login');
    await expect(loginButton).toHaveId('login-button');
    await expect(loginButton).toHaveClass('submit-button btn_action');
})

test('to have url, to have title assertion',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    // url ends with demo .com
    await expect(page).toHaveURL(/demo\.com\/?$/i);
    await page.goto('https://letcode.in/test')
    await page
    .locator('div',{has: page.getByText('Input',{exact: true})})
    .getByRole('link',{name: 'Play Sandbox'})
    .nth(1)
    .click();
    await expect(page).toHaveURL(/\/edit$/i);
})

