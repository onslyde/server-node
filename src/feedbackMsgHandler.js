// Libraries
var exec = require("child_process").exec;

// Custom libraries
var WsMsgHandler = require("./wsMsgHandler");
var Presentation = require("./presentation");
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");
var FeedbackEvent = require("./feedbackEvent");

FeedbackMsgHandler.prototype = new WsMsgHandler();
FeedbackMsgHandler.prototype.constructor = FeedbackMsgHandler;

function FeedbackMsgHandler(name)
{
	WsMsgHandler.call(this, name);
}

FeedbackMsgHandler.prototype.feedback = function(presentation, message, response, arguments)
{
	console.log("Feedback handler 'feedback' was called.");
	var json_msg = JSON.parse(message);
	//console.log(json_msg.message_body.value);
	
	// TODO
	// Once the feedback portion has been done properly fill in the feedback
	var feedback_event = new FeedbackEvent('test', 'temp_user', json_msg.message_body);
	presentation.newEventOccured( feedback_event );
	extra = '';
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
								"message_type": "feedback",
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
								"message_type": "feedback",
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
								"message_type": "feedback",
								"message_function": "error",
								"message_body":
								{
									"corresponding_seq": json_msg.seq_number
								}
						    };
	response = JSON.stringify(json_response); 
};


module.exports = FeedbackMsgHandler;
