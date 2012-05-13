// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

MainScreenUpdateEvent.prototype = new PresentationEvent();

MainScreenUpdateEvent.prototype.constructor = MainScreenUpdateEvent;

function MainScreenUpdateEvent(name)
{
	this.name = name;
}

MainScreenUpdateEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = MainScreenUpdateEvent;



