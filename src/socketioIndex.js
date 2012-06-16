// Libraries
// None

// Custom libraries
var socketioHttpRouter = require("./socketioHttpRouter");
var socketioWsRouter = require("./socketioWsRouter");
var socketio_server = require("./socketioServer");


//Start server 
socketio_server.start(8080, socketioHttpRouter.httpRoute, socketioWsRouter.wsRoute);