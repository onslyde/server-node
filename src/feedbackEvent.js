// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

FeedbackEvent.prototype = new PresentationEvent();

FeedbackEvent.prototype.constructor = FeedbackEvent;

function FeedbackEvent(name)
{
	this.name = name;
	this.time = new Date().getTime();
	console.log("Feedback event created: " + this.toString());
}

FeedbackEvent.prototype = 
{
	toString:	function()
	{
		return this.name + " at: " + this.time.toString();
	}
};


module.exports = FeedbackEvent;



