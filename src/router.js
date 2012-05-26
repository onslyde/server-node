var url = require("url");

function route(presentation_state_machine, handle, request, response) 
{
	parsed_request = parseRequest(request);
	path_name = parsed_request[0];
	path_arguments = parsed_request[1];
	method = parsed_request[2];
	
	console.log("Received a " + method + " request with path " + path_name);
	
	if(typeof handle[path_name + ":" + method] === 'function') 
	{
		handle[path_name + ":" + method](presentation_state_machine, response, path_arguments);
	} 
	else 
	{
		console.log("No request handler found for " + path_name);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

function parseRequest(request)
{
	var path_name = url.parse(request.url).pathname;
	var path_tokens = path_name.split("/");
	var path_arguments = new Array();
	
	if(path_tokens.length > 1)
	{
		path_name = path_tokens[1];
	}
		
	for(var i = 1; i < path_tokens.length; i++)
	{
		if(path_tokens[i] != "")
		{
			path_arguments.push(path_tokens[i]);
		}
	}
	
	return [path_name, path_arguments, request.method]
}

exports.route = route;