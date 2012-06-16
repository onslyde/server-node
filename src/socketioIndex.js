// Libraries
// None

// Custom libraries
var socketioHttpRouter = require("./socketioHttpRouter");
var socketioWsRouter = require("./socketioWsRouter");
var socketio_server = require("./socketioServer");
var requestHandlers = require("./requestHandlers");

//Slide controller handler
var slideControllerHandler = {};
slideControllerHandler["start"] = requestHandlers.start;
slideControllerHandler["restart"] = requestHandlers.restart;
slideControllerHandler["get_first_slide"] = requestHandlers.getFirstSlide;
slideControllerHandler["get_last_slide"] = requestHandlers.getLastSlide;
slideControllerHandler["get_next_slide"] = requestHandlers.getNextSlide;
slideControllerHandler["get_previous_slide"] = requestHandlers.getPreviousSlide;
slideControllerHandler["get_current_slide"] = requestHandlers.getCurrentSlide;
slideControllerHandler["choose_branch"] = requestHandlers.chooseBranch;
slideControllerHandler["return_to_branch"] = requestHandlers.returnToBranch;

//Start server 
socketio_server.start(8080, socketioHttpRouter.httpRoute, socketioWsRouter.wsRoute, slideControllerHandler);