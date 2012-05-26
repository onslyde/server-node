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
	}

	server = http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port.toString() + ".");
	
	// Setup socket.io
	function connection(client)
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
	socket.on('connection', connection);
	console.log("Server has websockets bound to it.");
}

exports.start = start;

