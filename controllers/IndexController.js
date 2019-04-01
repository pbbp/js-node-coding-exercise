const http = require('http');

class IndexController {
    constructor(router) {
        this.server = http.createServer(function (request, response) {
            router.getRoute(request.url, (err, data) => {
                let statusCode;

                if (err) {
                    response.writeHead(404);
                    response.write('<h1>Sorry Not Here!</h1>\n');
                    response.end();

                    statusCode = '404';
                } else {
                    response.writeHead(200);
                    response.write(data);
                    response.end();

                    statusCode = '200';
                }

                console.log(statusCode + ': ' + request.url)


            });
        });

    }

    init() {
        this.server.listen(3000);
        console.log('Server running at http://localhost:3000');
    }
}

module.exports = IndexController;