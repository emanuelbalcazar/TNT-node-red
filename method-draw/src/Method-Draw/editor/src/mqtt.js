const TOPIC = '/md/#';

// genero un ID de cliente aleatorio para permitir multiples conexiones.
const clientId = parseInt(Math.random() * 100, 10);
console.log('[mqtt] - cliente con id %s generado', clientId);

// creo un cliente MQTT.
const client = new Paho.MQTT.Client('localhost', 80, '/mqtt', clientId.toString());

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
    onFailure: (err) => {
        console.log('[MQTT] - Fallo la conexion a mqtt', err);
    }
});

client.onMessageArrived = (message) => {
    console.log('[Method Draw] - Llego un nuevo mensaje:', message);
    let selection = d3.select("svg").selectAll('[topic="' + message.topic + '"]');
    let params = JSON.parse(message.payloadString);
    
    console.log('[Method Draw] - selection:', selection);

    if (selection) {

        if (params.selectorId)
            selection = selection.select("#" + params.selectorId);

        selection.styles(params.styles);
        selection.attrs(params.attrs);
    }
}