// Libraries
// None

// Custom libraries
// None

function Slide(name)
{
	this.name = name;
};

Slide.prototype = 
{
	toString:	function()
	{
		return this.name;
	}
};


module.exports = Slide;