// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");
var MainScreenEvent = require("./mainScreenEvent");


function Slide(id, name)
{
	this.id = 0;
	this.name = name;
	// Possibly get rid of this
	this.presentation = null;
};

Slide.prototype = 
{
	exit:				function()
	{
		console.log("Exiting slide " + this.name + ".");
		main_screen_event = new MainScreenEvent("Exiting slide: " + this.toString());
		console.log("Event occured: " + main_screen_event.toString());
		return main_screen_event;
	},
	
	enter:				function()
	{
		console.log("Entering slide " + this.name + ".");
		main_screen_event = new MainScreenEvent("Entering slide: " + this.toString());
		console.log("Event occured: " + main_screen_event.toString());
		return main_screen_event;
	},
		
	toString:			function()
	{
		return this.name + "(" + this.id.toSring() + ")";
	}
};


module.exports = Slide;