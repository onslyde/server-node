// Libraries
// None

// Custom libraries
var Arboreal = require("./arboreal");
var Slide = require("./slide");

function PresentationStateMachine(name)
{
	this.name = name;
	this.current_node = null;
	this.slide_tree = null;
};

PresentationStateMachine.prototype =
{
	start:					function()
	{
		// TODO
	},
	
	restart:				function()
	{
		// TODO
	},
	
	getFirstSlide:			function()
	{
		// TODO
	},
	
	getLastSlide:			function()
	{
		// TODO
	},
	
	getNextSlide:			function()
	{
		// TODO
	},
	
	getPreviousSlide:		function()
	{
		// TODO
	},
	
	chooseBranch:			function(branch)
	{
		// TODO
	},
	
	returnToBranch:			function()
	{
		// TODO
	},
	
	toString:				function()
	{
		// TODO
	}
};


module.exports = PresentationStateMachine;

