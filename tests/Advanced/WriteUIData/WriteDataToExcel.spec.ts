import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import loginData from '../../../testdata/logindata.json';

const workbook = XLSX.readFile("testdata//ApplicationFormData.xlsx");
const adminSheet = workbook.Sheets["Admin"];
const adminData = XLSX.utils.sheet_to_json<{
    "Id": number;
    "FirstName": string;
    "LastName": string;
}>(adminSheet);

test("Write data to Excel", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill(loginData.username);
    await page.getByPlaceholder('Password').fill(loginData.password);
    await page.getByRole('button', { name: "Login" }).click();
    await page.waitForURL(/\/dashboard\/index$/, { timeout: 10000 });
    await expect(page.getByRole('heading', { level: 6 })).toHaveText("Dashboard");

    await page.getByRole('link', { name: 'My Info' }).first().click();
    await expect(page.getByRole('heading', { level: 6 }).first()).toHaveText('PIM');
    const firstNameLocator =  page.getByPlaceholder('First Name');
    await firstNameLocator.waitFor({state:'visible',timeout:10000});
    await page.waitForTimeout(3000);
    const firstNameFetched = await page.getByPlaceholder('First Name').inputValue();
    console.log(firstNameFetched)
    adminData[1].FirstName = firstNameFetched;
    const updatedAdminSheet = XLSX.utils.json_to_sheet(adminData);
    workbook.Sheets["Admin"] = updatedAdminSheet;
    XLSX.writeFile(workbook, "testdata/ApplicationFormData.xlsx");
});