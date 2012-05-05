// Libraries
// None

// Custom libraries
// None

function Flow(name)
{
	this.name = name;
};

Flow.prototype = 
{
	toString:	function()
	{
		return this.name;
	}
};


module.exports = Flow;