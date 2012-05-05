// Libraries
// None

// Custom libraries
var User = require("./user");
var PresentationEvent = require("./presentationEvent");
var SlideDeck = require("./slideDeck");

function Presentation(name)
{
	this.name = name;
	this.presenter = new User("Generic User");
	this.events = new Array();
	this.slide_deck = new SlideDeck("Generic Slide Deck");
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

