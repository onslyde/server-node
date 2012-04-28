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
handle["nextSlide:GET"] = requestHandlers.next_slide;
handle["previousSlide:GET"] = requestHandlers.previous_slide;
handle["slide:GET"] = requestHandlers.slide;

// User feedback handlers
// None

// Start server 
server.start(router.route, handle);
