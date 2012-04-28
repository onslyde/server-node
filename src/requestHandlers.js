var exec = require("child_process").exec;

function start(response, arguments) 
{
	console.log("Request handler 'start' was called.");

	exec("ls -lah", function (error, stdout, stderr) 
	{
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	});
}

function restart(response, arguments)
{
	console.log("Request handler 'restart' was called.");
}

function nextSlide(response, arguments)
{
	console.log("Request handler 'next_slide' was called.");
}

function previousSlide(response, arguments)
{
	console.log("Request handler 'previous_slide' was called.");
}

function slide(response, arguments)
{
	console.log("Request handler 'slide' was called.");
}

exports.start = start;
exports.restart = restart;
exports.nextSlide = nextSlide;
exports.previousSlide = previousSlide;
exports.slide = slide;

