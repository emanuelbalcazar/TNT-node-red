// https://nodered.org/docs/api/storage/methods/

const settings = {};

exports.init = function (settings) {
    return new Promise((resolve, reject) => {
        console.log('> init');
        settings = settings;
        resolve(settings);
    });
};

exports.getFlows = function () {
    return new Promise((resolve, reject) => {
        console.log('> getFlows');
        resolve();
    });
};

exports.saveFlows = function (flows) {
    return new Promise((resolve, reject) => {
        console.log('> saveFlows');
        resolve();
    });
};

exports.getCredentials = function () {
    return new Promise((resolve, reject) => {
        console.log('> getCredentials');
        resolve();
    });
};

exports.saveCredentials = function (credentials) {
    return new Promise((resolve, reject) => {
        console.log('> saveCredentials');
        resolve();
    });
};

exports.getSettings = function () {
    return new Promise((resolve, reject) => {
        console.log('> getSettings');
        resolve(settings);
    });
};

exports.saveSettings = function (settings) {
    return new Promise((resolve, reject) => {
        console.log('> saveSettings');
        resolve();
    });
};

exports.getSessions = function () {
    return new Promise((resolve, reject) => {
        console.log('> getSessions')
        resolve();
    });
};

exports.saveSessions = function (sessions) {
    return new Promise((resolve, reject) => {
        console.log('> saveSessions');
        resolve();
    });
};