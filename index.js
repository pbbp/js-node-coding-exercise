const http = require('http');
const Date = require('./DatePicker');
const Router = require('./Router');

console.log(new Date().today);

http.createServer(function (request, response) {
    let data = new Router().getRoute(request.url, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.write('<h1>Sorry Not Here!</h1>\n');
            response.end();

        } else {
            response.writeHead(200);
            response.write(data);
            response.end();

        }

    });
}).listen(3000);
console.log('Server running at http://localhost:3000');


