const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connector = require('./database/connector');

const config = require('./config/app.json');

// create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: '/public' => '/projects' deberia pasarse en una variable de entorno.
// get views.
const views = require('./routes/views');
app.use('/public', views);

// define all users api routes.
const users = require('./routes/user');
app.use('/public/api', users);

const projects = require('./routes/project');
app.use('/public/api', projects);

// static files.
app.use('/public', express.static(path.join(__dirname, 'public')));

// set host and port.
app.set('host', config.host || "localhost");
app.set('port', config.port || 8300);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Projects Manager iniciado en %s:%s', app.get('host'), app.get('port'));
});