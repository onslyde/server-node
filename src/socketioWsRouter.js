


function wsRoute(presentation, slideControllerHandler, message, response) 
{
	var seconds = new Date().getTime() / 1000;
	console.log("Web service message received at " + seconds.toString() + ".");
	var json_msg = JSON.parse(message);
	
	if(typeof slideControllerHandler[json_msg.messageType] === 'function')
	{
		slideControllerHandler[json_msg.messageType](presentation, response, '');
	}
	else
	{
		var seconds = new Date().getTime() / 1000;
		json_response = 	{
		  						"messageType": "ERROR",
		  						"data"  :
					     	{
					         	"example": "No request handler found for " + json_msg.messageType,
					         	"time":	seconds.toString()
					     	}
					    };
		response = JSON.stringify(json_response);
	}
}

exports.wsRoute = wsRoute;