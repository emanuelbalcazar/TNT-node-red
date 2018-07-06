const URL = process.env.mqtt || 'tcp://localhost/mqtt';
const TOPIC_CREATE = '/projects/create';
const TOPIC_REMOVE = '/projects/remove';

const exec = require('child_process').exec;
const mqtt = require('mqtt');
const client = mqtt.connect(URL);

client.on('connect', () => {
    console.log('[MQTT] - conectado a', URL);
    client.subscribe(TOPIC_CREATE);
    client.subscribe(TOPIC_REMOVE);
    console.log('[MQTT] - subscripto a %s y %s', TOPIC_CREATE, TOPIC_REMOVE);
});

client.on('error', (error) => {
    console.error('[MQTT] - error de conexion:', error);
});

client.on('offline', () => {
    console.log('[MQTT] - se encuentra desconectado.');
});

/**
 * Generate docker container, example:
 * docker-compose run --name="demo" -p 8201:8200 -e prefix='demo' -e collection='demo' nodered
 */
client.on('message', function (topic, message) {
    console.log('[MQTT] - topico: [%s] - msg: [%s]', topic, message.toString());
    let container = JSON.parse(message.toString());

    if (topic == TOPIC_CREATE) {
        console.log('[container] Creando el contenedor: %s en el puerto: %s con prefijo: %s', container.name, container.port, container.prefix);
        exec(`docker-compose run --name=${container.name} -p ${container.port}:8200 -e prefix=${container.prefix} -e collection=${container.collectionName} nodered`, (error, stdout, stderr) => {

        });
    }

    if (topic == TOPIC_REMOVE) {
        console.log('[container] Eliminando el contenedor con nombre: %s', container.name);
        exec(`docker rm -f container ${container.name}`, (error, stdout, stderr) => {

        });
    }
});

module.exports = client;