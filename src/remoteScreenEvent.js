// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

RemoteScreenEvent.prototype = new PresentationEvent();

RemoteScreenEvent.prototype.constructor = RemoteScreenEvent;

function RemoteScreenEvent(name)
{
	this.name = name;
}

RemoteScreenEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = RemoteScreenEvent;



