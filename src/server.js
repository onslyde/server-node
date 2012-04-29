// Libraries
var http = require("http");

// Custom libraries
var Presentation = require("./presentation");
var Slide = require("./slide");

function start(route, handle) 
{
	var presentation = createPresentation();
	presentation.start()
	
	function onRequest(request, response) 
	{
		route(presentation, handle, request, response);
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has started.");
}

function createPresentation()
{
	var presentation = new Presentation("Test Presentation");
	var slides = new Array();
	
	for(i = 0; i < 4; i++)
	{
		slide = new Slide("Slide " + i);
		slides.push(slide);
	}
	
	presentation.setSlides(slides);
	
	return presentation;
}

exports.start = start;