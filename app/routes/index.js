function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });

    server.get('/', function (req, res) {
        res.send(200, 'string');
    });

    server.use('/user', require('./user'));
    server.use('/designer', require('./designer'));
}

module.exports = {
    init: init
};