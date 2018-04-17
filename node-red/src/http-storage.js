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

            // response contains: [{ flows: [], version: '', id: '' }].
            response.on('end', function () {
                let data = JSON.parse(receivedData);
                let flows = (data && data.length) ? data[0].flows : [];
                resolve(flows);
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

            });

            res.on('end', () => {
                resolve();
            });
        });

        req.on('error', (err) => {
            reject(err.message);
        });

        // write data to request body
        req.write(JSON.stringify({ flows: flows, version: new Date().toString() }));
        req.end();
    });
}

module.exports = httpStorage;