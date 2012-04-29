var exec = require("child_process").exec;

function start(presentation, response, arguments) 
{
	console.log("Request handler 'start' was called.");
	presentation.start();
}

function restart(presentation, response, arguments)
{
	console.log("Request handler 'restart' was called.");
	presentation.restart();
}

function nextSlide(presentation, response, arguments)
{
	console.log("Request handler 'nextSlide' was called.");
	presentation.getNextSlide();
}

function previousSlide(presentation, response, arguments)
{
	console.log("Request handler 'previousSlide' was called.");
	presentation.getPreviousSlide();
}

function slide(presentation, response, arguments)
{
	console.log("Request handler 'slide' was called.");
}

exports.start = start;
exports.restart = restart;
exports.nextSlide = nextSlide;
exports.previousSlide = previousSlide;
exports.slide = slide;

