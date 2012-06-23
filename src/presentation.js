// Libraries
// None

// Custom libraries
var Slide = require("./slide");
var PresentationStateMachine = require("./presentationStateMachine");
var MainScreenEvent = require("./mainScreenEvent");
var DashboardEventEvent = require("./dashboardEvent");
var RemoteScreenEvent = require("./remoteScreenEvent");
var FeedbackEvent = require("./feedbackEvent");


function Presentation(name)
{
	this.name = name;
	this.state_machine = null;
	this.events = new Array();
};

Presentation.prototype =
{	
	toString:					function()
	{
		// TODO
		return this.name;
	},
	
	newEventOccured:			function(event)
	{
		if(event != null)
		{
			if(event instanceof SlideStateEvent)
			{
				this.handleSlideStateEvent();
			}
			else if(event instanceof FeedbackEvent)
			{
				this.handleFeedbackEvent();
			}
			
			this.events.push(event);
		}
	},
	
	handleSlideStateEvent:		function()
	{
		console.log("Slide state event occured.");
	},
	
	handleFeedbackEvent:		function()
	{
		console.log("Feedback event occured.");
	}
};


module.exports = Presentation;

