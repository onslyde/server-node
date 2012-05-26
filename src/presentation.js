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
			if(event instanceof MainScreenEvent)
			{
				this.handleMainScreenEvent();
			}
			else if(event instanceof DashboardEvent)
			{
				this.handleDashboardEvent();
			}
			else if(event instanceof RemoteScreenEvent)
			{
				this.handleRemoteScreenEvent();
			}
			else if(event instanceof FeedbackEvent)
			{
				this.handleFeedbackEvent();
			}
			
			this.events.push(event);
		}
	},
	
	handleMainScreenEvent:		function()
	{
		console.log("Main Screen Handler works.");
	},
	
	handleDashboardEvent:		function()
	{
		console.log("Dashboard Handler works.");
	},
	
	handleRemoteScreenEvent:	function()
	{
		console.log("Remote Screen Handler works.");
	},
	
	handleFeedbackEvent:		function()
	{
		console.log("Feedback Handler works.");
	}
};


module.exports = Presentation;

