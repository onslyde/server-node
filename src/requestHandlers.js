var exec = require("child_process").exec;

function start(presentation, response, arguments) 
{
	console.log("Request handler 'start' was called.");
	var slide = presentation.start();
}

function restart(presentation, response, arguments)
{
	console.log("Request handler 'restart' was called.");
	var slide = presentation.restart();
}

function nextSlide(presentation, response, arguments)
{
	console.log("Request handler 'nextSlide' was called.");
	var slide = presentation.getNextSlide();
}

function previousSlide(presentation, response, arguments)
{
	console.log("Request handler 'previousSlide' was called.");
	var slide = presentation.getPreviousSlide();
}

function slide(presentation, response, arguments)
{
	if(arguments.length > 0)
	{
		console.log("Request handler 'slide' was called with argument " + arguments[1] + ".");
		var slide = presentation.getSlideAt( parseInt(arguments[1]) );
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

