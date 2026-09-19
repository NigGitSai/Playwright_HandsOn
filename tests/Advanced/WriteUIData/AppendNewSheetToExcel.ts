import * as XLSX from 'xlsx';

function appendExcel(){
 const workbook = XLSX.readFile("testdata/ApplicationFormData.xlsx");
  const data = [
    { Id: 0, FirstName: 'Abc', LastName: 'dyer1' },
    { Id: 1, FirstName: 'Efg', LastName: 'dyer2' },
  ];

  const newSheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook,newSheet,"Admin3");
  XLSX.writeFile(workbook,"testdata/ApplicationFormData.xlsx");
}
appendExcel();