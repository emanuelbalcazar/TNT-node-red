const URL = process.env.mqtt || 'tcp://mqtt:1883';

const mqtt = require('mqtt');
const client = mqtt.connect(URL);

client.on('connect', () => {
    console.log('[MQTT] - conectado a', URL);
});

client.on('error', (error) => {
    console.error('[MQTT] - error de conexion:', error);
});

client.on('offline', () => {
    console.log('[MQTT] - se encuentra desconectado.');
});

module.exports = client;