const express = require('express');
const bodyParser = require('body-parser');
const connector = require('./database/connector');

const config = require('./config/app.json');

// create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static files.
app.use(express.static(path.join(__dirname, 'public')));

// set host and port.
app.set('host', config.HOST || "localhost");
app.set('port', config.PORT || 8300);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Users Manager iniciado en %s:%s', app.get('host'), app.get('port'));
});