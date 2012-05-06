// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

FeedbackEvent.prototype = new PresentationEvent();

FeedbackEvent.prototype.constructor = FeedbackEvent;

function FeedbackEvent(name)
{
	this.name = name;
}

FeedbackEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = FeedbackEvent;



