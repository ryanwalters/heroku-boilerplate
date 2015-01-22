'use strict';

var Hapi = require('Hapi'),
    PG = require('pg'),
    Server = new Hapi.Server();

Server.connection({ port: process.env.port || 5000});

Server.start(function () {
    console.log('Server running at: ', Server.info.uri);
});

Server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function (request, reply) {
        return reply.file('index.html');
    }
});