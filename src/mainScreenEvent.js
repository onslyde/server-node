// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

MainScreenEvent.prototype = new PresentationEvent();

MainScreenEvent.prototype.constructor = PresentationEvent;

function MainScreenEvent(name)
{
	this.name = name;
	this.time = new Date().getTime();
	console.log("Main screen event created: " + this.toString());
}

MainScreenEvent.prototype = 
{
	toString:	function()
	{
		return this.name + " at: " + this.time.toString();
	}
};

module.exports = MainScreenEvent;



