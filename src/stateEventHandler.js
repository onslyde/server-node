// Libraries
// None

// Custom libraries
var PresentationEventHandler = require("./presentationEventHandler");

StateEventHandler.prototype = new PresentationEventHandler();
StateEventHandler.prototype.constructor = StateEventHandler;

function StateEventHandler(name)
{
	PresentationEventHandler.call(this, name);
}

StateMsgHandler.prototype.start = function()
{
	console.log("State event handler 'start' was called.");
};

StateMsgHandler.prototype.restart = function()
{
	console.log("State event handler 'restart' was called.");
};

StateMsgHandler.prototype.getFirstSlide = function()
{
	console.log("State event handler 'getFirstSlide' was called.");
};

StateMsgHandler.prototype.getLastSlide = function()
{
	console.log("State event handler 'getLastSlide' was called.");
};

StateMsgHandler.prototype.getNextSlide = function(presentation, message, response, arguments)
{
	console.log("State event handler 'getNextSlide' was called.");
};

module.exports = StateEventHandler;
