const XLSX = require('xlsx');

function getExcelData(sheetName)
{
    let workbook = XLSX.readFile('./testdata/TestData.xlsx');
    let sheet = workbook.Sheets[sheetName];
    let data = XLSX.utils.sheet_to_json(sheet);

    return data;
}

module.exports = {getExcelData};