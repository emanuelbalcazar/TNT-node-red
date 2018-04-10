const http = require('http');
const localFileSystem = require('./node_modules/node-red/red/runtime/storage/localfilesystem');
var httpStorage = localFileSystem;

httpStorage.getFlows = function () {

    return new Promise((resolve, reject) => {
        http.get({
            host: '127.0.0.1',
            port: 8100,
            path: '/api/getFlows'
        }, (res) => {
            var responseData = "";
            res.on("data", function (data) {
                responseData += data;
            });
            res.on("end", function () {
                resolve([]);
            });
        });
    });
}

/* httpStorage.saveFlows = function (flows) {
    console.log('saveFlows');
    return localFileSystem.saveFlows(flows);
} */

module.exports = httpStorage;