import {test, expect} from '@playwright/test';
import loginData from '../../../testdata/logindata.json';
import candidateData from '../../../testdata/AddCandidateData.json';

test.beforeEach("Login Orange HRM",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill(loginData.username);
    await page.getByPlaceholder('Password').fill(loginData.password);
    await page.getByRole('button',{name: "Login"}).click();
    await page.waitForURL(/\/dashboard\/index$/,{timeout:10000});
    await expect(page.getByRole('heading',{level:6})).toHaveText("Dashboard");
})

test("Verify details in My Info", async ({page})=>{

    await page.getByRole('link',{name:"My Info"}).first().click();
    await expect(page.getByRole('heading',{level:6}).first()).toHaveText('PIM');
})

candidateData.forEach((data)=>{
test('Add Candidate for recruitment '+data.testName ,async ({page})=>{
    await page.getByRole('link',{name: 'Recruitment'}).click();
    await page.getByRole('heading',{level:6, name: 'Recruitment'}).waitFor({state:'visible',timeout:5000});
    await page.getByRole('button',{name: 'Add',exact:false}).first().click();

    await page.waitForURL(/\/recruitment\/addCandidate$/,{timeout:15000});
    await page.getByPlaceholder('First Name').fill(data.firstName);
    await page.getByPlaceholder('Middle Name').fill(data.middleName);
    await page.getByPlaceholder('Last Name').fill(data.lastName);
    await page.locator("//label[contains(text(),'Email')]/../..//input").fill(data.email);
    await page.getByRole('button',{name:'Save'}).click();
    await page.waitForURL(/\/recruitment\/addCandidate\/\d+$/,{timeout:10000});
    const fullName = await page.locator("//label[text()='Name']/../..//p").textContent();
    console.log(fullName);
    await expect(fullName?.trim()).toBe(data.fullName);
})})

for(let data of candidateData){
    test('Add Candidate for recruitment using for of '+data.testName ,async ({page})=>{
    await page.getByRole('link',{name: 'Recruitment'}).click();
    await page.getByRole('heading',{level:6, name: 'Recruitment'}).waitFor({state:'visible',timeout:5000});
    await page.getByRole('button',{name: 'Add',exact:false}).first().click();

    await page.waitForURL(/\/recruitment\/addCandidate$/,{timeout:15000});
    await page.getByPlaceholder('First Name').fill(data.firstName);
    await page.getByPlaceholder('Middle Name').fill(data.middleName);
    await page.getByPlaceholder('Last Name').fill(data.lastName);
    await page.locator("//label[contains(text(),'Email')]/../..//input").fill(data.email);
    await page.getByRole('button',{name:'Save'}).click();
    await page.waitForURL(/\/recruitment\/addCandidate\/\d+$/,{timeout:10000});
    const fullName = await page.locator("//label[text()='Name']/../..//p").textContent();
    console.log(fullName);
    await expect(fullName?.trim()).toBe(data.fullName);
})
}