// Libraries
var http = require('http');
var io = require('socket.io');

// Custom libraries
//Custom libraries
var socketioWsRouter = require("./socketioWsRouter");

function start(port, httpRoute, wsRoute) 
{
	// Setup node.js
	function onRequest(request, response) 
	{
		httpRoute(request, response);
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
		wsRoute(event);
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

