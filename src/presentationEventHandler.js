// Libraries
// None

// Custom libraries
// None

function PresentationEventHandler(name)
{
	this.name = name;
}

PresentationEventHandler.prototype.toString = function()
{
	return this.name;
};


module.exports = PresentationEventHandler;