var http = require("http");

function start(route, handle) 
{
	function onRequest(request, response) 
	{
		route(handle, request, response);
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has started.");
}

exports.start = start;