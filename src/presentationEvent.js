// Libraries
// None

// Custom libraries
// None

function PresentationEvent(name)
{
	this.name = name;
}

PresentationEvent.prototype.toString = function()
{
	return this.name;
};


module.exports = PresentationEvent;

