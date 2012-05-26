// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

RemoteScreenEvent.prototype = new PresentationEvent();

RemoteScreenEvent.prototype.constructor = RemoteScreenEvent;

function RemoteScreenEvent(name)
{
	this.name = name;
	this.time = new Date().getTime();
	console.log("Remote screen event created: " + this.toString());
}

RemoteScreenEvent.prototype = 
{
	toString:	function()
	{
		return this.name + " at: " + this.time.toString();
	}
};


module.exports = RemoteScreenEvent;



