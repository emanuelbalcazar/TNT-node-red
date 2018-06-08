// topic
const TOPIC = '/TNT/#';

// generate random client id.
const clientId = parseInt(Math.random() * 100, 10);
console.log('[MQTT] - Creando ID de cliente:', clientId);

const client = new Paho.MQTT.Client(window.location.host, 80, "/mqtt", clientId.toString());

client.connect({
    onSuccess: () => {
        console.log('[MQTT] - Me conecte');

        client.subscribe(TOPIC, {
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

client.onMessageArrived = (message) => {
    // ver el topico para saber QUE svg modificar (ej: circulo, cuadrado)
    // extraer el payload y modificar los attr y styles que contenga.
    console.log('[MQTT] - Llego un nuevo mensaje:', message);
    d3.select("circle").style("fill", "red");
    d3.select("circle").style("stroke", "blue");
    d3.select("circle").attr("cx", 150)
    d3.select("circle").attr("cy", 150)
    d3.select("circle").attr("r", 80);
}

const circleData = [
    { "cx": 20, "cy": 20, "radius": 20, "color": "green" },
    { "cx": 70, "cy": 70, "radius": 20, "color": "purple" }];

const rectangleData = [
    { "rx": 110, "ry": 110, "height": 30, "width": 30, "color": "blue" },
    { "rx": 160, "ry": 160, "height": 30, "width": 30, "color": "red" }];

// container
var svgContainer = d3.select("#canvas").append("svg")
    .attr("width", 200)
    .attr("height", 200);

// circle group <g></g>
var circleGroup = svgContainer.append("g");

// create all circles
var circles = circleGroup.selectAll("circle")
    .data(circleData)
    .enter()
    .append("circle");

// set attributes    
var circleAttributes = circles
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.radius; })
    .style("fill", function (d) { return d.color; });

// create all rectangles
var rectangles = svgContainer.selectAll("rect")
    .data(rectangleData)
    .enter()
    .append("rect");

var rectangleAttributes = rectangles
    .attr("x", function (d) { return d.rx; })
    .attr("y", function (d) { return d.ry; })
    .attr("height", function (d) { return d.height; })
    .attr("width", function (d) { return d.width; })
    .style("fill", function (d) { return d.color; });
