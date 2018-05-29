var client = new MqttClient({
    host: 'some.domain.tld/mqtt',
    port: 5678,
    will: {
        topic: 'farewells',
        payload: 'So long!',
    }
});

console.log('mqtt', client);