var exec = require("child_process").exec;

function start(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'start' was called.");
	var slide = presentation_state_machine.start();
	extra = "";
	writeGenericResponse(response, extra);
}

function restart(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'restart' was called.");
	var slide = presentation_state_machine.restart();
	extra = "Request handler 'restart' was called.";
	writeGenericResponse(response, extra);
}

function getFirstSlide(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'getFirstSlide' was called.");
	var slide = presentation_state_machine.getFirstSlide();
	extra = "Request handler 'getFirstSlide' was called.";
	writeGenericResponse(response, extra);
}

function getLastSlide(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'getLastSlide' was called.");
	var slide = presentation_state_machine.getLastSlide();
	extra = "Request handler 'getLastSlide' was called.";
	writeGenericResponse(response, extra);
}

function getPreviousSlide(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'getPreviousSlide' was called.");
	var slide = presentation_state_machine.getPreviousSlide();
	extra = "Request handler 'getPreviousSlide' was called.";
	writeGenericResponse(response, extra);
}

function getCurrentSlide(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'getCurrentSlide' was called.");
	var slide = presentation_state_machine.getCurrentSlide();
	extra = "Request handler 'getCurrentSlide' was called.";
	writeGenericResponse(response, extra);
}

function chooseBranch(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'chooseBranch' was called.");
	
	if(arguments.length > 0)
	{
		console.log("Request handler 'chooseBranch' was called with argument " + arguments[1] + ".");
		var slide = presentation_state_machine.chooseBranch( parseInt(arguments[1]) );
		extra = "Request handler 'chooseBranch' was called with argument " + arguments[1] + ".";
		writeGenericResponse(response, extra);
	}
	else
	{
		console.log("Request handler 'chooseBranch' was called with no arguments.");
		extra = "Request handler 'chooseBranch' was called with no arguments.";
		writeGenericResponse(response, extra);
	}
}

function returnToBranch(presentation_state_machine, response, arguments)
{
	console.log("Request handler 'returnToBranch' was called.");
	var slide = presentation_state_machine.returnToBranch();
	extra = "Request handler 'returnToBranch' was called.";
	writeGenericResponse(response, extra);
}

function writeGenericResponse(response, extra)
{
	var seconds = new Date().getTime() / 1000;
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Request was handled properly at: " + seconds.toString());
	response.write("");
	response.write(extra);
	response.end();
}


exports.start = start;
exports.restart = restart;
exports.getFirstSlide = getFirstSlide;
exports.getLastSlide = getLastSlide;
exports.getPreviousSlide = getPreviousSlide;
exports.getCurrentSlide = getCurrentSlide;
exports.chooseBranch = chooseBranch;
exports.returnToBranch = returnToBranch;

