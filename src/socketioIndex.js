// Libraries
// None

// Custom libraries
var testRouter = require("./testRouter");
var socketio_server = require("./socketioServer");

//Start server 
socketio_server.start(8080, testRouter.route);