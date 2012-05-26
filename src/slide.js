// Libraries
// None

// Custom libraries
var MainScreenEvent = require("./mainScreenEvent");


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