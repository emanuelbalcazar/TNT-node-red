module.exports = function (RED) {

    function SVGStorage(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        node.on('input', function (msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    console.log('Registrando el nodo svg-storage...')
    RED.nodes.registerType("svg-storage", SVGStorage);
}