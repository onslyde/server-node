// Libraries
// None

// Custom libraries
var Slide = require("./slide");
var PresentationStateMachine = require("./presentationStateMachine");


function Presentation(name)
{
	this.name = name;
	
};

Presentation.prototype =
{	
	toString:				function()
	{
		// TODO
		return this.name;
	}
};


module.exports = Presentation;

