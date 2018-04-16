// http-storage.js - node-red custom plugin.
const http = require('http');
const localFileSystem = require('./node_modules/node-red/red/runtime/storage/localfilesystem');
var httpStorage = localFileSystem;

const api = {
    HOST: "storage",
    PORT: 8100
};

// get flows from storage-api component.
httpStorage.getFlows = function () {
    return new Promise((resolve, reject) => {
        http.get({
            host: api.HOST,
            port: api.PORT,
            path: '/api/getFlows'
        }, function (response) {
            var receivedData = "";

            response.on('error', function (err) {
                reject(err);
            });

            response.on('data', function (data) {
                receivedData += data;
            });

            response.on('end', function () {
                resolve([receivedData]);
            });
        });
    });
}

httpStorage.saveFlows = function (flows) {
    return new Promise((resolve, reject) => {
        const options = {
            host: api.HOST,
            port: api.PORT,
            path: '/api/saveFlows',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        const req = http.request(options, (res) => {
            res.setEncoding('utf8');

            res.on('data', (chunk) => {
                console.log('Respuesta del servidor:', chunk);
            });

            res.on('end', () => {
                console.log('Flows enviados, codigo', res.statusCode);
                resolve();
            });
        });

        req.on('error', (err) => {
            console.error('Error al realizar el request', err.message);
            reject(err.message);
        });

        // write data to request body
        req.write(JSON.stringify(flows));
        req.end();
    });
}

module.exports = httpStorage;