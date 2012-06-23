// Libraries
var exec = require("child_process").exec;

// Custom libraries
var WsMsgHandler = require("./wsMsgHandler");
var Presentation = require("./presentation");
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");

FeedbackMsgHandler.prototype = new WsMsgHandler();
FeedbackMsgHandler.prototype.constructor = FeedbackMsgHandler;

function FeedbackMsgHandler(name)
{
	WsMsgHandler.call(this, name);
}

FeedbackMsgHandler.prototype.sendFeedback = function(presentation, message, response, arguments)
{
	console.log("Feedback handler 'sendFeedback' was called.");
	// TODO
	// Fill in the body 
	
	FeedbackMsgHandler.prototype.writeAckResponse(message, response, extra);
};

FeedbackMsgHandler.prototype.writeAckResponse = function(message, response, extra)
{
	console.log("Feedback response is an ACK.");
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

FeedbackMsgHandler.prototype.writeNackResponse = function(message, response, extra)
{
	console.log("Feedback response is an NACK.");
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

FeedbackMsgHandler.prototype.writeErrorResponse = function(message, response, extra)
{
	console.log("Feedback response is an error.");
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


module.exports = FeedbackMsgHandler;
