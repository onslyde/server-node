// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

SlideStateEvent.prototype = new PresentationEvent();
SlideStateEvent.prototype.constructor = SlideStateEvent;

function SlideStateEvent(name, event_type)
{
	PresentationEvent.call(this, name);
	this.event_type = event_type;
}


module.exports = SlideStateEvent;



