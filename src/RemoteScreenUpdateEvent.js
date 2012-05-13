// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

RemoteScreenUpdateEvent.prototype = new PresentationEvent();

RemoteScreenUpdateEvent.prototype.constructor = RemoteScreenUpdateEvent;

function RemoteScreenUpdateEvent(name)
{
	this.name = name;
}

RemoteScreenUpdateEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = RemoteScreenUpdateEvent;



