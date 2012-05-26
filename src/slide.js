// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");
var MainScreenEvent = require("./mainScreenEvent");


function Slide(id, name)
{
	this.id = id;
	this.name = name;
	// Possibly get rid of this
	this.presentation = null;
};

Slide.prototype = 
{
	exit:				function()
	{
		console.log("Exiting slide " + this.name + ".");
		main_screen_event = new MainScreenEvent(this.toString());
		return main_screen_event;
	},
	
	enter:				function()
	{
		console.log("Entering slide " + this.name + ".");
		main_screen_event = new MainScreenEvent(this.toString());
		return main_screen_event;
	},
		
	toString:			function()
	{
		return this.name + "(" + this.id.toString() + ")";
	}
};


module.exports = Slide;