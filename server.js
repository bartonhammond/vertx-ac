load('vertx.js');

var server = vertx.createHttpServer();

// Create a SockJS bridge which lets everything through (be careful!)
vertx.createSockJSServer(server).bridge({prefix: "/eventbus"}, [{}], [{}]);

server.listen(vertx.env['PORT'],'0.0.0.0');