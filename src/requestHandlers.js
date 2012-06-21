var exec = require("child_process").exec;

//Custom libraries
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");

function start(presentation, response, arguments)
{
	console.log("Request handler 'start' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.start();
	extra = "Request handler 'start' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function restart(presentation, response, arguments)
{
	console.log("Request handler 'restart' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.restart();
	extra = "Request handler 'restart' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function getFirstSlide(presentation, response, arguments)
{
	console.log("Request handler 'getFirstSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.getFirstSlide();
	extra = "Request handler 'getFirstSlide' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function getLastSlide(presentation, response, arguments)
{
	console.log("Request handler 'getLastSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.getLastSlide();
	extra = "Request handler 'getLastSlide' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function getNextSlide(presentation, response, arguments)
{
	console.log("Request handler 'getNextSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.getNextSlide();
	extra = "Request handler 'getNextSlide' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function getPreviousSlide(presentation, response, arguments)
{
	console.log("Request handler 'getPreviousSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.getPreviousSlide();
	extra = "Request handler 'getPreviousSlide' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function getCurrentSlide(presentation, response, arguments)
{
	console.log("Request handler 'getCurrentSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.getCurrentSlide();
	extra = "Request handler 'getCurrentSlide' was called.\n";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function chooseBranch(presentation, response, arguments)
{
	if(arguments.length > 0)
	{
		console.log("Request handler 'chooseBranch' was called with argument " + arguments[1] + ".");
		var presentation_state_machine = presentation.state_machine;
		var slide = presentation_state_machine.chooseBranch( parseInt(arguments[1]) );
		extra = "Request handler 'chooseBranch' was called with argument " + arguments[1] + ".";
		if(slide != null)
		{
			extra += "Currently on slide: " + slide.toString();
		}
		writeWsAckResponse(response, extra);
	}
	else
	{
		console.log("Request handler 'chooseBranch' was called with no arguments.");
		extra = "Request handler 'chooseBranch' was called with no arguments.";
		writeWsAckResponse(response, extra);
	}
}

function returnToBranch(presentation, response, arguments)
{
	console.log("Request handler 'returnToBranch' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.returnToBranch();
	extra = "Request handler 'returnToBranch' was called.";
	if(slide != null)
	{
		extra += "Currently on slide: " + slide.toString();
	}
	writeWsAckResponse(response, extra);
}

function writeHttpResponse(response, extra)
{
	var seconds = new Date().getTime() / 1000;
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Request was handled properly at: " + seconds.toString() + "\n");
	response.write("\n");
	response.write(extra);
	response.end();
}

function writeWsResponse(response, extra)
{
	var seconds = new Date().getTime() / 1000;
	json_response = 	{
	  						"messageType": "ACK",
	  						"data"  :
				     	{
				         	"example": "TEST"
				     	}
				    };
	response = JSON.stringify(json_response);
}

function writeWsAckResponse(response, extra)
{
	var seconds = new Date().getTime() / 1000;
	json_response = 	{
	  						"messageType": "ACK",
	  						"data"  :
				     	{
				         	"example": extra,
				         	"time":	seconds.toString()
				     	}
				    };
	response = JSON.stringify(json_response);
}

function writeWsNackResponse(response, extra)
{
	var seconds = new Date().getTime() / 1000;
	json_response = 	{
	  						"messageType": "NACK",
	  						"data"  :
				     	{
				         	"example": extra,
				         	"time":	seconds.toString()
				     	}
				    };
	response = JSON.stringify(json_response);
}

exports.start = start;
exports.restart = restart;
exports.getFirstSlide = getFirstSlide;
exports.getLastSlide = getLastSlide;
exports.getNextSlide = getNextSlide;
exports.getPreviousSlide = getPreviousSlide;
exports.getCurrentSlide = getCurrentSlide;
exports.chooseBranch = chooseBranch;
exports.returnToBranch = returnToBranch;

