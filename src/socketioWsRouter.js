


function wsRoute(message) 
{
	var seconds = new Date().getTime() / 1000;
	console.log("Web service message received at " + seconds.toString() + ".");
	var msg = JSON.parse(message);
	console.log(msg.messageType);
}

exports.wsRoute = wsRoute;