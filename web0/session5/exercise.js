//On your NodeJS project install the below with npm
//npm i exceljs

//Now in your code use that package
const exceljs = require('exceljs'); //This is used to write to the excel file

//The below is the NodeJS /AddUser endpoint which is a function that I made:
app.post('/AddUser', function (req, res) {
    var nameFileExcel = 'data.xlsx'
    var workbook1 = new exceljs.Workbook();
    workbook1.xlsx.readFile(nameFileExcel)
    .then(function()  {
        var worksheet1 = workbook1.getWorksheet(1);
        var lastRow = worksheet1.lastRow;
        var getRowInsert = worksheet1.getRow(++(lastRow.number));
        getRowInsert.getCell('A').value = req.body.Email;
        getRowInsert.getCell('B').value = req.body.Password;
        getRowInsert.getCell('C').value = req.body.Phone;
        getRowInsert.getCell('D').value = req.body["2FA"];
        getRowInsert.commit();
        workbook1.xlsx.writeFile(nameFileExcel)
    })
    res.send('OK')
    
})
