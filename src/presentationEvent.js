// Libraries
// None

// Custom libraries
// None

function PresentationEvent(name)
{
	this.name = name;
	this.time = new Date().getTime();
	console.log("Presentation event created: " + this.toString());
};

PresentationEvent.prototype = 
{
	toString:	function()
	{
		return this.name + " at: " + this.time.toString();
	}
};


module.exports = PresentationEvent;