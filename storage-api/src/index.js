const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();

const config = require('./config/app.json');

// configure all environments.
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// declare all routes.
var router = require('./routes/routes');
app.use('/api', router);

app.set('host', config.host);
app.set('port', config.port);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Storage Api iniciado en %s:%s', app.get('host'), app.get('port'));
});