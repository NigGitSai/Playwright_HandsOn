
import * as XLSX from 'xlsx';


function createExcelFile(){
const data = [
  { Id: 0, FirstName: 'Marie', LastName: 'Wilson' },
  { Id: 1, FirstName: 'Kim', LastName: 'Taylor' },
];

const workbook = XLSX.utils.book_new();
const admin2Sheet = XLSX.utils.json_to_sheet(data);
XLSX.utils.book_append_sheet(workbook,admin2Sheet,'Admin2');
XLSX.writeFile(workbook,"testdata\\ApplicationFormData1.xlsx");

}

createExcelFile();