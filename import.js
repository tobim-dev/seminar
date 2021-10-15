"use strict";
exports.__esModule = true;
var xlsx_1 = require("xlsx");
var workbook = xlsx_1["default"].readFile('Master.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = xlsx_1["default"].utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);
