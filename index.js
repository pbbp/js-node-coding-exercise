const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile(__dirname + '/views' + request.url + '.html', function (error, data) {
        if (error) {
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


