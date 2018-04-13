// module of connection to the database.
var mongoose = require('mongoose');
var url = require('../config/app').database;

var connection = mongoose.connect(url);

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - conectado en:', url);
});

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error de conexion:', err);
    process.exit(1);
});

module.exports = connection;