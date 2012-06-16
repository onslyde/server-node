


function wsRoute(event) 
{
	var seconds = new Date().getTime() / 1000;
	console.log("Web service message received at " + seconds.toString() + ".");
}

exports.wsRoute = wsRoute;