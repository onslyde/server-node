// Libraries
var http = require('http');
var io = require('socket.io');

// Custom libraries
// None

function start(port) 
{
	// Setup node.js
	function onRequest(request, response) 
	{
		console.log("Request received.");
		var seconds = new Date().getTime() / 1000;
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Request was handled properly at: " + seconds.toString() + "\n");
		response.write("\n");
		response.end();
	}

	server = http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port.toString() + ".");
	
	// Setup socket.io
	function onConnection(client)
	{
		client.on('message',onMessage);
		client.on('disconnect',onDisconnect);
	}
	
	function onMessage(event)
	{
		console.log('Received message from client!',event);
	}
	
	function onDisconnect()
	{
		console.log('Client and server disconnected.');
	}
	
	var socket = io.listen(server);
	socket.on('connection', onConnection);
	console.log("Server has websockets bound to it.");
}

exports.start = start;

