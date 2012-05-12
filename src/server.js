// Libraries
var http = require("http");

// Custom libraries
var Presentation = require("./presentation");
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");

function start(route, handle) 
{
	// Slide deck variables
	var presentation = createPresentation();
	var presentation_state_machine = presentation.state_machine;
	//slide_deck.start();
	
	// Server variables
	var port = 8080;
	
	function onRequest(request, response) 
	{
		route(slide_deck, handle, request, response);
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port.toString() + ".");
}

function createPresentation()
{
	var presentation = new Presentation("Test Presentation");
	var presentation_state_machine = new PresentationStateMachine("Test State Machine");
	
	// Create slide tree 
	// TODO make this a JSON object that is parsed
	var state_tree = 
	
	
	
	var slide_deck = new SlideDeck("Test Slide Deck");
	var slides = new Array();
	
	for(i = 0; i < 4; i++)
	{
		slide = new Slide("Slide " + (i));
		slides.push(slide);
	}
	
	slide_deck.setSlides(slides);
	
	return slide_deck;
}

exports.start = start;