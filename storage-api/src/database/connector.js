// connector.js - module of connection to the database.
const mongoose = require('mongoose');
const url = require('../config/app.json').database;
const TIME_TO_WAIT = require('../config/app.json').timeToWait;

var connection = {};

// wait a certain time.
async function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, TIME_TO_WAIT)
    });
}

// start the connection to mongodb.
async function connect() {
    await wait();
    connection = mongoose.connect(url);

    mongoose.connection.on('connected', () => {
        console.log('[Mongoose] - conectado en:', url);
        return connection;
    });

    mongoose.connection.on('error', (err) => {
        console.log('[Mongoose] - error de conexion:', err);
        process.exit(1);
    });
}

module.exports = connect();