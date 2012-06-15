var url = require("url");
var fs = require('fs')
var path = require('path');

function route(request, response) 
{
	var seconds = new Date().getTime() / 1000;
	console.log("Request received at " + seconds.toString() + ".");
	loadInterface(request, response);
}

function loadInterface(request, response)
{
	parsed_request = parseRequest(request);
	path_name = parsed_request[0];
	path_arguments = parsed_request[1]; // Not used
	method = parsed_request[2];
	content_type = parsed_request[3];
    
	if(method == 'GET' && content_type == 'text/html')
	{
		readContent(response, content_type, './index.html');
	}
	else if(method == 'GET' && content_type == 'text/javascript')
	{
		readContent(response, content_type, './' + path_name);
	}
	else if(method == 'GET' && content_type == 'text/css')
	{
		response.writeHead(500, {'Content-Type' : 'text/plain'});
		response.end('Internal Server Error');
	}
	else
	{
		response.writeHead(500, {'Content-Type' : 'text/plain'});
		response.end('Internal Server Error');
	}
}

function readContent(response, content_type, file_name)
{
	try
	{
		fs.readFile(file_name, function(error, content)
		{
			if(error)
			{
				console.log(error);
				response.writeHead(500, {'Content-Type' : 'text/plain'});
				response.end('Internal Server Error');
	        }
			else
			{
				response.writeHead(200, {'Content-Type' : content_type});
				response.end(content, 'utf-8');
	        }
	     });
	}
	catch(err)
	{
		response.writeHead(500, {'Content-Type' : 'text/plain'});
		response.end('Internal Server Error');
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
	
	content_type = determineContentType(request);
	
	console.log("Request received: " + request.method + "  Path: " + path_name + "  Content type: " + content_type);
	
	return [path_name, path_arguments, request.method, content_type];
}

function determineContentType(request)
{
	var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
         
    var extension_name = path.extname(filePath);
   
    var content_type = 'text/html';
    switch(extension_name) 
    {
        case '.js':
        	content_type = 'text/javascript';
            break;
        case '.css':
        	content_type = 'text/css';
            break;
    }
    
    return content_type;
}

exports.route = route;