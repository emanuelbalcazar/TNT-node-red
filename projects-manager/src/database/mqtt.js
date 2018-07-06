const URL = process.env.mqtt || 'tcp://mqtt:1883';
const TOPIC = process.env.topic || '/projects/#';

const mqtt = require('mqtt');
const client = mqtt.connect(URL);

client.on('connect', () => {
    console.log('[MQTT] - conectado a', URL);
    client.subscribe(TOPIC);
    console.log('[MQTT] - subscripto a', TOPIC);
});

client.on('error', (error) => {
    console.error('[MQTT] - error de conexion:', error);
});

client.on('offline', () => {
    console.log('[MQTT] - se encuentra desconectado.');
});

client.on('message', function (topic, message) {
    console.log('[MQTT] - topico: [%s] - msg: [%s]', topic, message.toString());
});

module.exports = client;