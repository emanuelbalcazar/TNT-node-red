const TOPIC_CREATE = '/projects/create';
const TOPIC_REMOVE = '/projects/remove';
const mqttClient = require('./mqtt');

// default resolvers...
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
        return 'http://mqtt:9001';
}

var nodeContainers = new Array;

const dinamicResolver = (host, url) => {
    nodeContainers.forEach((container) => {
        if (url.includes(container.prefix)) {
            let url = 'http://' + container.name + ':' + container.port + '/' + container.prefix;
            console.log('[RESOLVER] - devolviendo url:', url);
            return url;
        }
    });
};

const proxy = require('redbird')({
    port: 80
});

proxy.addResolver(dinamicResolver);
proxy.addResolver(projectResolver);
proxy.addResolver(noderedResolver);
proxy.addResolver(mqttResolver);

mqttClient.subscribe(TOPIC_CREATE);
mqttClient.subscribe(TOPIC_REMOVE);

console.log('[REDBIRD] - subscripto a %s y %s', TOPIC_CREATE, TOPIC_REMOVE);

mqttClient.on('message', function (topic, message) {
    console.log('[REDBIRD] - topico: [%s] - msg: [%s]', topic, message.toString());
    let container = JSON.parse(message.toString());

    if (topic == TOPIC_CREATE) {
        console.log('[REDBIRD] - agregando una nueva regla con:', container);
        nodeContainers.push(container);
    }

    if (topic == TOPIC_REMOVE) {

    }
});