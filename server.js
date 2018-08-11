const
    server = require('./server/index')(),
    config = require('./server/config');

server.create(config);
server.start();