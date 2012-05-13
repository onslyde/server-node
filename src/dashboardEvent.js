// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

DashboardUpdateEvent.prototype = new PresentationEvent();

DashboardUpdateEvent.prototype.constructor = DashboardUpdateEvent;

function DashboardUpdateEvent(name)
{
	this.name = name;
}

DashboardUpdateEvent.prototype.toString = function()
{
	return this.name;
}


module.exports = DashboardUpdateEvent;



