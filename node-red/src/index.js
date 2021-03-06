const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const RED = require('node-red');

const PORT = require('./config/app.json').port;
const PREFIX = process.env.prefix || 'nodered';

// create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static files.
app.use("/nodered", express.static(path.join(__dirname, 'public')));

// declare all routes.
const views = require('./routes/routes');
app.use(views);

const mqtt = require('./routes/mqtt-auth');
app.use(mqtt);

// create a server
const server = http.createServer(app);

// create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot: "/" + PREFIX,
    httpNodeRoot: "/" + PREFIX,
    httpRoot: "/" + PREFIX,
    userDir: "/data",
    storageModule: require("./plugins/http-storage"),
    functionGlobalContext: {}    // enables global context
};

console.log('[NODERED] - SETTINGS: puerto %s - root %s', PORT, settings.httpRoot);

// initialize the runtime with a server and settings
RED.init(server, settings);

// serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(PORT);

// start the runtime
RED.start();
