const DatePicker = require('./DatePicker');

let datePicker = new DatePicker();
console.log(datePicker.today);
console.log(datePicker.daysUntil('Dec 25 2019'));