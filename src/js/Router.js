const jade = require('jade');

class Router {

    getRoute(urlPath, callback) {
        let template = jade.compileFile(__dirname + '/../html/404.jade');

        try {
            template = jade.compileFile(__dirname + '/../html' + urlPath + '.jade');
            callback(template());

        } catch (err) {
            console.log(err);
            callback(template(), true);
        }


    }
}

module.exports = Router;