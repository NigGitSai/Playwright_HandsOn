import { test, chromium, expect } from "@playwright/test";

test('Base URL Test', async ({ page }) => {
    await page.goto('/notebooks');
    expect(await page.title()).toBe('Demo Web Shop. Notebooks');
})