// Libraries
var exec = require("child_process").exec;

// Custom libraries
var WsMsgHandler = require("./wsMsgHandler");
var Presentation = require("./presentation");
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");

StateMsgHandler.prototype = new WsMsgHandler();
StateMsgHandler.prototype.constructor = StateMsgHandler;

function StateMsgHandler(name)
{
	WsMsgHandler.call(this, name);
}

StateMsgHandler.prototype.start = function(presentation, message, response, arguments)
{
	console.log("State control handler 'start' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.start();
	
	if(slide != null)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra); 
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra); 
	}
};

StateMsgHandler.prototype.restart = function(presentation, message, response, arguments)
{
	console.log("State control handler 'restart' was called.");
	var presentation_state_machine = presentation.state_machine;
	var slide = presentation_state_machine.restart();
	
	if(slide != null)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra); 
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra); 
	}
};

StateMsgHandler.prototype.getFirstSlide = function(presentation, message, response, arguments)
{
	console.log("State control handler 'getFirstSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var current_slide = presentation_state_machine.getCurrentSlide();
	var next_slide = presentation_state_machine.getFirstSlide();
	
	if(slide != null && next_slide.id != current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra);
	}
	else if(slide != null && next_slide.id == current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeNackResponse(message, response, extra);
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
};

StateMsgHandler.prototype.getLastSlide = function(presentation, message, response, arguments)
{
	console.log("State control handler 'getLastSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var current_slide = presentation_state_machine.getCurrentSlide();
	var next_slide = presentation_state_machine.getLastSlide();
	
	if(slide != null && next_slide.id != current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra);
	}
	else if(slide != null && next_slide.id == current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeNackResponse(message, response, extra);
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
};

StateMsgHandler.prototype.getNextSlide = function(presentation, message, response, arguments)
{
	console.log("State control handler 'getNextSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var current_slide = presentation_state_machine.getCurrentSlide();
	var next_slide = presentation_state_machine.getNextSlide();
	
	if(slide != null && next_slide.id != current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra);
	}
	else if(slide != null && next_slide.id == current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeNackResponse(message, response, extra);
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
};

StateMsgHandler.prototype.getPreviousSlide = function(presentation, message, response, arguments)
{
	console.log("State control handler 'getPreviousSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var current_slide = presentation_state_machine.getCurrentSlide();
	var next_slide = presentation_state_machine.getPreviousSlide();
	
	if(slide != null && next_slide.id != current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra);
	}
	else if(slide != null && next_slide.id == current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeNackResponse(message, response, extra);
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
};

StateMsgHandler.prototype.getCurrentSlide = function(presentation, message, response, arguments)
{
	console.log("State control handler 'getCurrentSlide' was called.");
	var presentation_state_machine = presentation.state_machine;
	var current_slide = presentation_state_machine.getCurrentSlide();
	var next_slide = presentation_state_machine.getCurrentSlide();
	
	if(slide != null && next_slide.id == current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra);
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
};

StateMsgHandler.prototype.chooseBranch = function(presentation, message, response, arguments)
{
	if(arguments.length > 0)
	{
		console.log("State control handler 'chooseBranch' was called with argument " + arguments[1] + ".");
		var presentation_state_machine = presentation.state_machine;
		var current_slide = presentation_state_machine.getCurrentSlide();
		var next_slide = presentation_state_machine.chooseBranch( parseInt(arguments[1]) );
		
		if(slide != null && next_slide.id != current_slide.id)
		{
			extra = "";
			StateMsgHandler.prototype.writeAckResponse(message, response, extra);
		}
		else if(slide != null && next_slide.id == current_slide.id)
		{
			extra = "";
			StateMsgHandler.prototype.writeNackResponse(message, response, extra);
		}
		else
		{
			extra = "";
			StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
		}
	}
	else
	{
		console.log("State control handler 'chooseBranch' was called with no arguments.");
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
};

StateMsgHandler.prototype.returnToBranch = function(presentation, message, response, arguments)
{
	console.log("State control handler 'returnToBranch' was called.");
	var presentation_state_machine = presentation.state_machine;
	var current_slide = presentation_state_machine.getCurrentSlide();
	var next_slide = presentation_state_machine.returnToBranch();
	
	if(slide != null && next_slide.id != current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeAckResponse(message, response, extra);
	}
	else if(slide != null && next_slide.id == current_slide.id)
	{
		extra = "";
		StateMsgHandler.prototype.writeNackResponse(message, response, extra);
	}
	else
	{
		extra = "";
		StateMsgHandler.prototype.writeErrorResponse(message, response, extra);
	}
	 
};

StateMsgHandler.prototype.writeAckResponse = function(message, response, extra)
{
	console.log("State control response is an ACK.");
	var json_msg = JSON.parse(message);
	var json_response = 	{
								"protocol": "onslyde",
								"version": "1",
								"seq_number": "1",
								"message_type": "state_control",
								"message_function": "ack",
								"message_body":
								{
									"corresponding_seq": json_msg.seq_number
								}
						    };
	response = JSON.stringify(json_response);
};

StateMsgHandler.prototype.writeNackResponse = function(message, response, extra)
{
	console.log("State control response is a NACK.");
	var json_msg = JSON.parse(message);
	var json_response = 	{
								"protocol": "onslyde",
								"version": "1",
								"seq_number": "1",
								"message_type": "state_control",
								"message_function": "nack",
								"message_body":
								{
									"corresponding_seq": json_msg.seq_number
								}
						    };
	response = JSON.stringify(json_response); 
};

StateMsgHandler.prototype.writeErrorResponse = function(message, response, extra)
{
	console.log("State control response is an error.");
	var json_msg = JSON.parse(message);
	var json_response = 	{
								"protocol": "onslyde",
								"version": "1",
								"seq_number": "1",
								"message_type": "state_control",
								"message_function": "error",
								"message_body":
								{
									"corresponding_seq": json_msg.seq_number
								}
						    };
	response = JSON.stringify(json_response); 
};


module.exports = StateMsgHandler;



