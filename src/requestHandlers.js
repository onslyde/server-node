var exec = require("child_process").exec;

function start(slide_deck, response, arguments) 
{
	console.log("Request handler 'start' was called.");
	var slide = slide_deck.start();
	genericResponse(response)
}

function restart(slide_deck, response, arguments)
{
	console.log("Request handler 'restart' was called.");
	var slide = slide_deck.restart();
	genericResponse(response)
}

function nextSlide(slide_deck, response, arguments)
{
	console.log("Request handler 'nextSlide' was called.");
	var slide = slide_deck.getNextSlide();
	genericResponse(response)
}

function previousSlide(slide_deck, response, arguments)
{
	console.log("Request handler 'previousSlide' was called.");
	var slide = slide_deck.getPreviousSlide();
	genericResponse(response)
}

function slide(slide_deck, response, arguments)
{
	if(arguments.length > 0)
	{
		console.log("Request handler 'slide' was called with argument " + arguments[1] + ".");
		var slide = slide_deck.getSlideAt( parseInt(arguments[1]) );
		genericResponse(response)
	}
	else
	{
		console.log("Request handler 'slide' was called with no arguments.");
	}
}

function genericResponse(response)
{
	var seconds = new Date().getTime() / 1000;
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Request was handled properly at: " + seconds.toString());
	response.end();
}

exports.start = start;
exports.restart = restart;
exports.nextSlide = nextSlide;
exports.previousSlide = previousSlide;
exports.slide = slide;

