load('vertx.js');

var server = vertx.createHttpServer();

server.requestHandler(function(req) {
  if (req.uri == "/") {
      req.response.sendFile("index.html");
  }
  if (req.uri == "/port") {
      req.response.end("Port: " + vertx.env['PORT']);
  }

});

// Create a SockJS bridge which lets everything through (be careful!)
vertx.createSockJSServer(server).bridge({prefix: "/eventbus"}, [{}], [{}]);


server.listen(vertx.env['PORT'],'0.0.0.0');
