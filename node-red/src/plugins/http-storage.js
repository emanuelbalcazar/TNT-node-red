// http-storage.js - node-red custom plugin.
const http = require('http');
const localFileSystem = require('../../node_modules/node-red/red/runtime/storage/localfilesystem');
var httpStorage = localFileSystem;

const api = {
    HOST: "storage",
    PORT: 8100,
    COLLECTION: process.env.collection || 'nodered'
};

console.log('[STORAGE PLUGIN]:', api)

// get flows from storage-api component.
httpStorage.getFlows = function () {
    return new Promise((resolve, reject) => {
        http.get({
            host: api.HOST,
            port: api.PORT,
            path: '/api/getFlows/' + api.COLLECTION
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

// sends to persist the flows.
httpStorage.saveFlows = function (flows) {
    return new Promise((resolve, reject) => {
        const options = {
            host: api.HOST,
            port: api.PORT,
            path: '/api/saveFlows/' + api.COLLECTION,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        const req = http.request(options, (res) => {
            res.setEncoding('utf8');

            res.on('data', (chunk) => {
                // nothing to do
            });

            res.on('end', () => {
                resolve();
            });
        });

        req.on('error', (err) => {
            reject(err.message);
        });

        // write data to request body
        req.write(JSON.stringify({ flows: flows, version: new Date() }));
        req.end();
    });
}

module.exports = httpStorage;