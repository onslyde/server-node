// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

FeedbackEvent.prototype = new PresentationEvent();
FeedbackEvent.prototype.constructor = FeedbackEvent;

function FeedbackEvent(name, user, feedback)
{
	PresentationEvent.call(this, name);
	this.user = user;
	this.feedback = feedback;
}


module.exports = FeedbackEvent;



