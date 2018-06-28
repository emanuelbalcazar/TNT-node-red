const http = require('http');
const path = require('path');
const express = require('express');
const RED = require('node-red');

// create an Express app
const app = express();

// static files.
app.use('/nodered', express.static(path.join(__dirname, 'public')));

// declare all routes.
const views = require('./routes/routes');
app.use(views);

const mqtt = require('./routes/mqtt-auth');
app.use(mqtt);

// create a server
const server = http.createServer(app);

// create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot: "/nodered",
    httpNodeRoot: "/nodered",
    httpRoot: "/nodered",
    userDir: "/data",
    storageModule: require("./plugins/http-storage"),
    functionGlobalContext: {}    // enables global context
};

// initialize the runtime with a server and settings
RED.init(server, settings);

// serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8200);

// start the runtime
RED.start();
