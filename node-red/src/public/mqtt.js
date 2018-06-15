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
    let params = JSON.parse(message.payloadString);

    if (selection) {
        console.log('seleccion:', selection);
        selection.styles(params.styles);
        selection.attrs(params.attrs);
    }
}
