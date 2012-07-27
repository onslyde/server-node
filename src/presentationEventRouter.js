// Libraries
// None

// Custom libraries
var FeedbackEventHandler = require("./feedbackEventHandler");
var StateEventHandler = require("./stateEventHandler");

function PresentationEventRouter(name, handlers)
{
	this.name = name;
	this.handlers = handlers;
}

PresentationEventRouter.prototype.toString = function()
{
	return this.name;
};

PresentationEventRouter.prototype.route = function(event, msg)
{
	if(this.handlers != null)
	{
		for(var i = 0; i < this.handlers.length; i++)
		{
			if(typeof handler[event.x] === 'function')
			{
				handler[event.x](msg);
				return;
			}
		}
	}
	else
	{
		console.log("Error no routes are defined for the event.");
		
		// TODO
		// copied this from other code so the message needs to be redone
		var json_msg = 	{
							"protocol": "onslyde",
							"version": "1",
							"seq_number": "1",
							"message_type": "status",
							"message_function": "error",
							"message_body":
							{
								"explanation": "No request handler found for "
							}
					    };
		msg = JSON.stringify(json_msg);
	}
};

module.exports = PresentationEventRouter;