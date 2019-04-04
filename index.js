const Date = require('./DatePicker');
const Router = require('./src/js/Router');
const IndexController = require('./src/js/controllers/IndexController');

console.log(new Date().today);

let controller = new IndexController(
    new Router()
);

controller.init();

