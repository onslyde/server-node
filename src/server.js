// Libraries
var http = require("http");

// Custom libraries
var Presentation = require("./presentation");
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");
var Arboreal = require("./arboreal");

function start(route, handle) 
{
	// Slide deck variables
	var presentation = createPresentation();
	var presentation_state_machine = presentation.state_machine;
	presentation_state_machine.start();
	
	// Server variables
	var port = 8080;
	
	function onRequest(request, response) 
	{
		route(presentation_state_machine, handle, request, response);
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port.toString() + ".");
}

function createPresentation()
{
	var presentation = new Presentation("Test Presentation");
	var presentation_state_machine = new PresentationStateMachine("Test State Machine");
	 
	// TODO make this a JSON object that is parsed
	// A -> B -> C
	//           |-> D -> E -> F
	//           |-> G -> H
	//           |-> I -> J -> K
	//                         |-> L -> M
	//                         |-> N -> O
	
	// First leg
	var a = new Arboreal();
	a.data = new Slide(0, "A");
	
	a.appendChild();
	b = a.children[0];
	b.data = new Slide(1, "B");
	
	b.appendChild();
	c = b.children[0];
	c.data = new Slide(2, "C");
	
	// Second leg
	c.appendChild();
	d = c.children[0];
	d.data = new Slide(3, "D");
	
	d.appendChild();
	e = d.children[0];
	e.data = new Slide(4, "E");
	
	e.appendChild();
	f = e.children[0];
	f.data = new Slide(5, "F");
	
	// Third leg
	c.appendChild();
	g = c.children[1];
	g.data = new Slide(6, "G");
	
	g.appendChild();
	h = g.children[0];
	h.data = new Slide(7, "H");
	
	// Fourth leg
	c.appendChild();
	i = c.children[2];
	i.data = new Slide(8, "I");
	
	i.appendChild();
	j = i.children[0];
	j.data = new Slide(9, "J");
	
	j.appendChild();
	k = j.children[0];
	k.data = new Slide(10, "K");
	
	// Fifth leg
	k.appendChild();
	l = k.children[0];
	l.data = new Slide(11, "L");
	
	l.appendChild();
	m = l.children[0];
	m.data = new Slide(12, "M");
	
	// Sixth leg
	k.appendChild();
	n = k.children[1];
	n.data = new Slide(13, "N");
	
	n.appendChild();
	o = n.children[0];
	o.data = new Slide(14, "O");
	
	presentation_state_machine.setSlideTree(a);
	presentation.state_machine = presentation_state_machine;
	
	return presentation;
}

exports.start = start;