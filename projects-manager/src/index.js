const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connector = require('./database/connector');

const config = require('./config/app.json');

// create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get views.
const views = require('./routes/views');
app.use('/public', views);

// define all users api routes.
const users = require('./routes/user');
app.use('/api', users);

// static files.
app.use(express.static(path.join(__dirname, 'public')));

// set host and port.
app.set('host', config.host || "localhost");
app.set('port', config.port || 8300);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Projects Manager iniciado en %s:%s', app.get('host'), app.get('port'));
});