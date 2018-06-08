/**
 * Topico al cual me voy a subscribir, debe ser acorde al TP4.
 */
const TOPIC = '/PM/tnt/#';

// genero un ID de cliente aleatorio para permitir multiples conexiones.
const clientId = parseInt(Math.random() * 100, 10);

// creo un cliente MQTT.
const client = new Paho.MQTT.Client(window.location.host, 80, "/mqtt", clientId.toString());

// inicio la conexion, y me subscribo al topico definido en la constante.
client.connect({
    onSuccess: () => {
        console.log('[MQTT] - Me conecte correctamente');

        client.subscribe(TOPIC, {
            onSuccess: () => {
                console.log('[MQTT] - Me subscribi correctamente al topico', TOPIC);
            },
            onFailure: () => {
                console.log('[MQTT] - Fallo la subscripcion al topico', TOPIC);
            }
        })
    },
    onFailure: () => {
        console.log('[MQTT] - Fallo la conexion a mqtt');
    }
});

/**
 * Modifica los elementos del SVG cuando llega un nuevo mensaje.
 * El topico permite seleccionar los elementos con atributo topico="algo".
 * Ej: d3.select("svg").selectAll('[topico="/PM/tnt/a"]').style("fill", "yellow")
 */
client.onMessageArrived = (message) => {
    console.log('[MQTT] - Llego un nuevo mensaje:', message);
    let selection = d3.select("svg").selectAll('[topico="' + message.topic + '"]');

    if (selection) {
        selection.style("fill", "yellow");
    }
}

// TODO: eliminar en el futuro, solo se usa para probar la edicion.
const circleData = [
    { "cx": 20, "cy": 20, "radius": 20 },
    { "cx": 70, "cy": 70, "radius": 20 }];

const rectangleData = [
    { "rx": 110, "ry": 110, "height": 30, "width": 30, "color": "blue", "topico": "/PM/tnt/a" },
    { "rx": 160, "ry": 160, "height": 30, "width": 30, "color": "red", "topico": "/PM/tnt/b" }
];

// container
var svgContainer = d3.select("#canvas").append("svg")
    .attr("width", 200)
    .attr("height", 200);

// circle group <g style="fill: green;"></g>
var circleGroup = svgContainer.append("g")
    .attr("topico", "/PM/tnt/a")
    .style("fill", "green");

// create all circles
var circles = circleGroup.selectAll("circle")
    .data(circleData)
    .enter()
    .append("circle");

// set attributes
var circleAttributes = circles
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.radius; });
//.style("fill", function (d) { return d.color; });

// create all rectangles
var rectangles = svgContainer.selectAll("rect")
    .data(rectangleData)
    .enter()
    .append("rect");

// set attributes
var rectangleAttributes = rectangles
    .attr("x", function (d) { return d.rx; })
    .attr("y", function (d) { return d.ry; })
    .attr("topico", function (d) { return d.topico; })
    .attr("height", function (d) { return d.height; })
    .attr("width", function (d) { return d.width; })
    .style("fill", function (d) { return d.color; });
