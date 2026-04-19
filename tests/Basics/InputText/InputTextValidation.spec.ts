import { test, expect, Locator } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/edit');
    await page.waitForLoadState('domcontentloaded');
});

test('Enter text', async ({ page }) => {
    const enterFullName = page.getByPlaceholder('Enter first & last name').first();
    await enterFullName.fill('Abdul Kalam');
    const valueEntered = await enterFullName.inputValue();
    expect(valueEntered).toBe('Abdul Kalam');
})

test('Append text', async ({ page }) => {
    await page.waitForTimeout(5000);
    const appendName = page.locator('#join').first();
    await appendName.click();
    await appendName.press('End');
  // await  appendName.press('Tab');
    await appendName.type(' person');
    const valueEntered = await appendName.inputValue();
    expect(valueEntered).toBe('I am good person');
})

test('clear the input field', async ({ page }) => {
    const clearmeInput = page.locator('#clearMe').first();
    await clearmeInput.clear();
    const valueEntered = await clearmeInput.inputValue();
    expect(valueEntered).toBe('');
})

test('Verify Editable and Disabled', async ({ page }) => {
    const readOnlyInput = page.locator('#dontwrite').first();
    const isEditable = await readOnlyInput.isEditable();
    expect(isEditable).toBe(false);

    const inputDisabled = page.locator('#noEdit').first();
    const isDisabled = await inputDisabled.isDisabled();
    expect(isDisabled).toBe(true);
})
