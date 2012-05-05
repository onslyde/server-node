// Libraries
// None

// Custom libraries
var User = require("./user");
var Flow = require("./flow");
var SlideDeck = require("./slideDeck");

function Presentation(name)
{
	this.name = name;
	this.presenter = null;
	this.flow = null;
	this.slide_deck = null;
	this.audience = new Array();
};

Presentation.prototype =
{	
	toString:				function()
	{
		// TODO
		return this.name;
	}
};


module.exports = Presentation;

