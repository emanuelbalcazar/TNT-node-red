module.exports = function (RED) {

    function SVGStorage(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var filename = config.filename;
        var filecontent = config.content;

        node.on('input', function (msg) {
            if (msg.req.url === "/svg-list") {
                msg.payload = [{ id: 1, name: filename }];
                return node.send(msg);
            }

            msg.payload = filecontent;
            node.send(msg);
        });
    }
    console.log('Registrando el nodo svg-storage...')
    RED.nodes.registerType("svg-storage", SVGStorage);
}