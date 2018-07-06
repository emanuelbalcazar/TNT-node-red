const mqttClient = require('./mqtt');
const TOPIC_CREATE = '/projects/create';
const TOPIC_REMOVE = '/projects/remove';

var projectResolver = function (host, url, req) {
    if (/^\/public\//.test(url))
        return 'http://projects-manager:8300';
}

var noderedResolver = function (host, url) {
    if (/^\/nodered/.test(url))
        return 'http://nodered:8200';   
}

var mqttResolver = function (host, url) {
    if (/^\/mqtt/.test(url))
        return 'http://mqtt:9883';
}

const proxy = require('redbird')({
    port: 80
});

proxy.addResolver(projectResolver);
proxy.addResolver(noderedResolver);

// me subscribo a los topicos
mqttClient.subscribe(TOPIC_CREATE);
mqttClient.subscribe(TOPIC_REMOVE);
console.log('[REDBIRD] - subscripto a %s y %s', TOPIC_CREATE, TOPIC_REMOVE);

mqttClient.on('message', function (topic, message) {
    console.log('[REDBIRD] - topico: [%s] - msg: [%s]', topic, message.toString());
    let container = JSON.parse(message.toString());

    if (topic == TOPIC_CREATE) {

    }

    if (topic == TOPIC_REMOVE) {

    }
});