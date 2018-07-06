const express = require('express');
const bodyParser = require('body-parser');
const mqttClient = require('./mqtt');

// create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set host and port.
app.set('host', process.env.host || "localhost");
app.set('port', process.env.port || 8400);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Container Manager iniciado en %s:%s', app.get('host'), app.get('port'));
});