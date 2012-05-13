// Libraries
// None

// Custom libraries
var PresentationEvent = require("./presentationEvent");

MainScreenEvent.prototype = new PresentationEvent();

MainScreenEvent.prototype.constructor = MainScreenEvent;

/*
function MainScreenEvent(name)
{
	this.name = name;
}
*/

module.exports = MainScreenEvent;



