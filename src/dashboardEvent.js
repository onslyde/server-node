// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

DashboardUpdateEvent.prototype = new PresentationEvent();

DashboardUpdateEvent.prototype.constructor = DashboardUpdateEvent;

function DashboardUpdateEvent(name)
{
	this.name = name;
	this.time = new Date().getTime();
	console.log("Dashboard event created: " + this.toString());
}

DashboardUpdateEvent.prototype = 
{
	toString:	function()
	{
		return this.name + " at: " + this.time.toString();
	}
};


module.exports = DashboardUpdateEvent;



