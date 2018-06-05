const clientId = parseInt(Math.random() * 100, 10);
console.log('Creando ID de cliente:', clientId);

var client = new Paho.MQTT.Client(window.location.host, 80, "/mqtt", clientId.toString());

// se ejecuta cuando llega un mensaje.
client.onMessageArrived = (message) => {
    console.log('[MQTT] - Nuevo mensaje:', message);

    d3.select("circle").style("fill", "red");
    d3.select("circle").style("stroke", "blue");
    d3.select("circle").attr("cx", 150)
    d3.select("circle").attr("cy", 150)
    d3.select("circle").attr("r", 80);
}

client.connect({
    onSuccess: () => {
        console.log('[MQTT] - Me conecte');
        //client.publish('/a', 'Hola soy el cliente TNT', 0, false);
        client.subscribe('/test/#', {
            onSuccess: () => {
                console.log('[MQTT] - Me subscribi correctamente');
            },
            onFailure: () => {
                console.log('[MQTT] - Fallo la subscripcion');
            }
        })
    },
    onFailure: () => {
        console.log('[MQTT] - Fallo la conexion a mqtt');
    }
});


var sampleSVG = d3.select("#canvas")
    .append("svg")
    .attr("width", 300)
    .attr("height", 300);

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
