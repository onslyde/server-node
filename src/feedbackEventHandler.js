// Libraries
// None

// Custom libraries
var PresentationEventHandler = require("./presentationEventHandler");

FeedbackEventHandler.prototype = new PresentationEventHandler();
FeedbackEventHandler.prototype.constructor = FeedbackEventHandler;

function FeedbackEventHandler(name)
{
	PresentationEventHandler.call(this, name);
}

module.exports = FeedbackEventHandler;
