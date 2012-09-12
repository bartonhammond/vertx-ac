load('vertx.js');

var server = vertx.createHttpServer();

// Create a SockJS bridge which lets everything through
vertx.createSockJSServer(server).bridge({prefix: "/eventbus"}, [{}], [{}]);

//Start the server, list to the port defined in the environment and 
//accept requests from any host.
//When running locally, set the PORT to say 8080
//It's purpose has more to with running on Heroku
server.listen(vertx.env['PORT'],'0.0.0.0');

