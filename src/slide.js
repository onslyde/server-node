// Libraries
// None

// Custom libraries
// None

function Slide(id, name)
{
	this.id = 0;
	this.name = name;
};

Slide.prototype = 
{
	exit:				function()
	{
		// TODO
		console.log("Exiting slide " + this.name + ".");
	},
	
	enter:				function()
	{
		// TODO
		console.log("Entering slide " + this.name + ".");
	},
		
	toString:			function()
	{
		return this.name;
	}
};


module.exports = Slide;