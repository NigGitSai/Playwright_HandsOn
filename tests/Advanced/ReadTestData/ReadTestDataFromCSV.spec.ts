import {test,expect} from '@playwright/test';
import fs from "fs";
import {parse} from "csv-parse/sync";
type CsvFormData = {
  Id: string;
  FirstName: string;
  LastName: string;
};
const formData = parse<CsvFormData>(fs.readFileSync("testdata/FormData.csv","utf-8"),{
    "columns":true,
    "skipEmptyLines":true,
    //"delimiter":";"
})

const data1 = parse(fs.readFileSync("testdata/TestWoColumn.csv"),{
"skipEmptyLines":true
})

formData.forEach((data)=>{
test(`Read test data from CSV ${data.Id}`,async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.waitForURL(/\/automation-practice-form$/,{timeout:5000});
    await page.getByPlaceholder("First Name").fill(data.FirstName);
    await page.getByPlaceholder("Last Name").fill(data.LastName);
})
})