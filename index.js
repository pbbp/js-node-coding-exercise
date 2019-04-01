const Date = require('./DatePicker');
const Router = require('./Router');
const IndexController = require('./controllers/IndexController');

console.log(new Date().today);

let controller = new IndexController(
    new Router()
);

controller.init();

