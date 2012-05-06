// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

UiUpdateEvent.prototype = new PresentationEvent();

UiUpdateEvent.prototype.constructor = UiUpdateEvent;

function UiUpdateEvent(name)
{
	this.name = name;
}

UiUpdateEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = UiUpdateEvent;



