// Libraries
// None

// Custom libraries
var Slide = require("./slide");
var PresentationStateMachine = require("./presentationStateMachine");


function Presentation(name)
{
	this.name = name;
	this.state_machine = null;
	
};

Presentation.prototype =
{	
		/*
	start:					function(state_machine)
	{
		if(state_machine != null)
		{
			this.state_machine = state_machine;
			return this.state_machine.start();
		}
		
		console.log("Error starting the presentation because no state machine present.");
		return null;
	},
	*/
	
	toString:				function()
	{
		// TODO
		return this.name;
	}
};


module.exports = Presentation;

