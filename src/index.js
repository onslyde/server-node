// Libraries
// None

// Custom libraries
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var presentation = require("./presentation");

// Slide controller handler
var slideControllerHandler = {};
slideControllerHandler[":GET"] = requestHandlers.start;
slideControllerHandler["start:GET"] = requestHandlers.start;
slideControllerHandler["restart:GET"] = requestHandlers.restart;
slideControllerHandler["getFirstSlide:GET"] = requestHandlers.getFirstSlide;
slideControllerHandler["getLastSlide:GET"] = requestHandlers.getLastSlide;
slideControllerHandler["getNextSlide:GET"] = requestHandlers.getNextSlide;
slideControllerHandler["getPreviousSlide:GET"] = requestHandlers.getPreviousSlide;
slideControllerHandler["getCurrentSlide:GET"] = requestHandlers.getCurrentSlide;
slideControllerHandler["chooseBranch:GET"] = requestHandlers.chooseBranch;
slideControllerHandler["returnToBranch:GET"] = requestHandlers.returnToBranch;

// User feedback handlers
// None

// Start server 
server.start(8080, router.route, slideControllerHandler, null);
