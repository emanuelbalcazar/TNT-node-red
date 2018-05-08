const http = require('http');
const express = require('express');
const router = express.Router();

const RED = require('node-red');

// create an Express app
const app = express();

// add a simple route for static content served from 'public'
app.use('/', express.static('public'));

router.get('/file', (req, res) => {
    res.render('index');
});

app.use(router);

// create a server
const server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/nodered",
    httpNodeRoot: "/api",
    httpRoot: "/nodered",
    userDir:".",
    storageModule: require("./http-storage"),
    functionGlobalContext: { }    // enables global context
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
