


function wsRoute(presentation, slideControllerHandler, message, response) 
{
	//console.log("Received a " + method + " request with path " + path_name);
	
	//if(typeof slideControllerHandler[path_name + ":" + method] === 'function') 
	{
		//slideControllerHandler[path_name + ":" + method](presentation_state_machine, response, path_arguments);
	} 
	//else 
	{
		//console.log("No request handler found for " + path_name);
		//response.writeHead(404, {"Content-Type": "text/plain"});
		//response.write("404 Not found");
		//response.end();
	}
	
	var seconds = new Date().getTime() / 1000;
	console.log("Web service message received at " + seconds.toString() + ".");
	var json_msg = JSON.parse(message);
	
	if(typeof slideControllerHandler[json_msg.messageType] === 'function')
	{
		slideControllerHandler[json_msg.messageType](presentation, response, '');
	}
	else
	{
		console.log("ERROR");
	}
}

exports.wsRoute = wsRoute;