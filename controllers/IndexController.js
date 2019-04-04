const http = require('http');

class IndexController {
    constructor(router) {
        this.server = http.createServer((request, response) => {
            router.getRoute(request.url, (data, err) => {
                let statusCode;

                if (err) {
                    response.writeHead(404);
                    statusCode = '404';
                } else {
                    response.writeHead(200);
                    statusCode = '200';
                }

                response.write(data);
                response.end();

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