// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");
var PresentationEvent = require("./presentationEvent");

function Slide(id, name)
{
	this.id = 0;
	this.name = name;
	this.presentation = null;
};

Slide.prototype = 
{
	exit:				function()
	{
		console.log("Exiting slide " + this.name + ".");
		if(this.presentation != null)
		{
			
		}
	},
	
	enter:				function()
	{
		console.log("Entering slide " + this.name + ".");
	},
		
	toString:			function()
	{
		return this.name;
	}
};


module.exports = Slide;