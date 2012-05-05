// Libraries
var http = require("http");

// Custom libraries
var SlideDeck = require("./slideDeck");
var Slide = require("./slide");

function start(route, handle) 
{
	// Slide deck variables
	var slide_deck = createSlideDeck();
	slide_deck.start()
	
	// Server variables
	var port = 8080;
	
	function onRequest(request, response) 
	{
		route(slide_deck, handle, request, response);
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port.toString() + ".");
}

function createSlideDeck()
{
	var slide_deck = new SlideDeck("Test Slide Deck");
	var slides = new Array();
	
	for(i = 0; i < 4; i++)
	{
		slide = new Slide("Slide " + (i+1));
		slides.push(slide);
	}
	
	slide_deck.setSlides(slides);
	
	return slide_deck;
}

exports.start = start;