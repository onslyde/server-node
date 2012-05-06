// Libraries
// None

// Custom libraries
// None

function PresentationEvent(name)
{
	this.name = name;
	this.time = 0;
};

PresentationEvent.prototype = 
{
	toString:	function()
	{
		return "Event: " + this.name + "  Occured at: " + this.time.toString();
	}
};


module.exports = PresentationEvent;