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
	exitSlide:			function()
	{
		// TODO
		console.log("Exiting slide " + this.name + ".");
	},
	
	enterSlide:			function()
	{
		// TODO
		console.log("Entering slide " + this.name + ".");
	},
		
	toString:	function()
	{
		return this.name;
	}
};


module.exports = Slide;