// Libraries
// None

// Custom libraries
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// State machine handlers
var handle = {};
handle[":GET"] = requestHandlers.start;
handle["start:GET"] = requestHandlers.start;
handle["restart:GET"] = requestHandlers.restart;
handle["getFirstSlide:GET"] = requestHandlers.getFirstSlide;
handle["getLastSlide:GET"] = requestHandlers.getLastSlide;
handle["getNextSlide:GET"] = requestHandlers.getNextSlide;
handle["getPreviousSlide:GET"] = requestHandlers.getPreviousSlide;
handle["getCurrentSlide:GET"] = requestHandlers.getCurrentSlide;
handle["chooseBranch:GET"] = requestHandlers.chooseBranch;
handle["returnToBranch:GET"] = requestHandlers.returnToBranch;

// User feedback handlers
// None

// Start server 
server.start(router.route, handle);
