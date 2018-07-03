var projectResolver = function (host, url, req) {
    if (/^\/public\//.test(url))
        return 'http://projects-manager:8300';
}

var noderedResolver = function (host, url) {
    if (/^\/nodered/.test(url))
        return 'http://nodered:8200';   
}

const proxy = require('redbird')({
    port: 80
});

proxy.addResolver(projectResolver);
proxy.addResolver(noderedResolver);
