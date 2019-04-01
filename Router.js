const fs = require('fs');

class Router {

    getRoute(urlPath, callback) {
        try {
            fs.readFile(__dirname + '/views' + urlPath + '.html', callback);
        } catch (err) {
            callback(err, null);
        }
    }
}

module.exports = Router;