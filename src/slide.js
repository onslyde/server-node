// Libraries
// None

// Custom libraries
var SlideStateEvent = require("./slideStateEvent");


function Slide(id, name)
{
	this.id = id;
	this.name = name;
};

Slide.prototype = 
{
	exit:				function()
	{
		console.log("Exiting slide " + this.name + ".");
		slide_state_event = new SlideStateEvent(this.toString(), "exit");
		return main_screen_event;
	},
	
	enter:				function()
	{
		console.log("Entering slide " + this.name + ".");
		slide_state_event = new SlideStateEvent(this.toString(), "enter");
		return main_screen_event;
	},
		
	toString:			function()
	{
		return this.name + "(" + this.id.toString() + ")";
	}
};


module.exports = Slide;