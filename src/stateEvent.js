// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

StateEvent.prototype = new PresentationEvent();

StateEvent.prototype.constructor = StateEvent;

function StateEvent(name)
{
	this.name = name;
}

StateEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = StateEvent;



