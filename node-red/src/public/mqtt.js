/**
 * https://www.npmjs.com/package/web-mqtt-client
 */
var client = new MqttClient({
    host: 'localhost',
    port: 9001,
    will: {
        topic: 'messages',
        payload: 'So long!',
    }
});

console.log('[mqtt] - cliente creado', client);

//client.connect();
//client.publish('messages', 'Hola', {}, () => {});

client.on('connecting', () => {
    console.log('[mqtt] - conectando...');
});

client.on('connect', () => {
    console.log('[mqtt] - conectado');
});

client.on('disconnect', () => {
    console.log('[mqtt] - desconectado');
});

client.on('offline', () => {
    console.log('[mqtt] - desconectado, intente conectarse manualmente');
});

client.on('message', console.log.bind(console, 'MQTT message arrived: '));

client.on('message', (topic, payload, details) => {
    console.log('[mqtt] - [%s] - %s', topic, payload);
});

var sampleSVG = d3.select("#canvas")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .transition()
    .delay(100)
    .duration(1000)
    .attr("r", 10)
    .attr("cx", 30)
    .style("fill", "black");
