import {test,expect} from '@playwright/test';
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile("testdata/ApplicationFormData.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const formData = XLSX.utils.sheet_to_json<{
    Id: number;
    FirstName:string;
    LastName:string;
}>(sheet);

const workbook1 = XLSX.readFile("testdata/ApplicationFormData.xlsx");
const adminSheet = workbook1.Sheets['Admin'];
const admindata = XLSX.utils.sheet_to_json<{
Id: number;
    FirstName:string;
    LastName:string;
}>(adminSheet)

test("Read XLSX data", async ({page})=>{
    console.log(formData);

    console.log("=====================");
    console.log(admindata);

    console.log("to access second row first name")
    console.log(admindata[1].FirstName);
})