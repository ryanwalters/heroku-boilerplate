'use strict';

var Hapi = require('hapi'),
    PG = require('pg'),
    Server = new Hapi.Server();

Server.connection({ port: process.env.PORT || 5000});

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

Server.route({
    method: 'GET',
    path: '/app.js',
    handler: function (request, reply) {
        return reply.file('app.js');
    }
});

Server.route({
    method: 'GET',
    path: '/app/{param*}',
    handler: {
        directory: {
            path: 'app'
        }
    }
});