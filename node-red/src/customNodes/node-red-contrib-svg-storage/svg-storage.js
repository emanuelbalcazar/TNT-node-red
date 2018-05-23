module.exports = function (RED) {

    function SVGStorage(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        // get filename and content from svg-storage node.
        var filename = config.filename;
        var filecontent = config.content;

        // check topic en msg.req.url
        node.on('input', function (msg) {
            if (msg.req.url === "/svg-list") {
                msg.payload = [{ id: 1, name: filename }];
                return node.send(msg);
            }
            msg.payload = filecontent;
            node.send(msg);
        });
    }
    console.log('[svg storage] - Registrando el nodo svg-storage...')
    RED.nodes.registerType("svg-storage", SVGStorage);
}