var exec = require("child_process").exec;

function start(slide_deck, response, arguments) 
{
	console.log("Request handler 'start' was called.");
	var slide = slide_deck.start();
}

function restart(slide_deck, response, arguments)
{
	console.log("Request handler 'restart' was called.");
	var slide = slide_deck.restart();
}

function nextSlide(slide_deck, response, arguments)
{
	console.log("Request handler 'nextSlide' was called.");
	var slide = slide_deck.getNextSlide();
}

function previousSlide(slide_deck, response, arguments)
{
	console.log("Request handler 'previousSlide' was called.");
	var slide = slide_deck.getPreviousSlide();
}

function slide(slide_deck, response, arguments)
{
	if(arguments.length > 0)
	{
		console.log("Request handler 'slide' was called with argument " + arguments[1] + ".");
		var slide = slide_deck.getSlideAt( parseInt(arguments[1]) );
	}
	else
	{
		console.log("Request handler 'slide' was called with no arguments.");
	}
}

exports.start = start;
exports.restart = restart;
exports.nextSlide = nextSlide;
exports.previousSlide = previousSlide;
exports.slide = slide;

