// Libraries
// None

// Custom libraries
// None

function wsRoute(presentation, ws_msg_handler, message, response) 
{
	var seconds = new Date().getTime() / 1000;
	console.log("Web service message received at " + seconds.toString() + ".");
	var json_msg = JSON.parse(message);
	var arguments = [ json_msg.message_body.value ];
	
	// TODO
	// Add some more message verification
	if(typeof ws_msg_handler[json_msg.message_function] === 'function')
	{
		ws_msg_handler[json_msg.message_function](presentation, message, response, arguments);
	}
	else
	{
		var seconds = new Date().getTime() / 1000;
		var json_response = 	{
									"protocol": "onslyde",
									"version": "1",
									"seq_number": "1",
									"message_type": "status",
									"message_function": "error",
									"message_body":
									{
										"explanation": "No request handler found for " + json_msg.messageType
									}
							    };
		response = JSON.stringify(json_response);
	}
}

exports.wsRoute = wsRoute;