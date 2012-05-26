// Libraries
var http = require("http");

// Custom libraries
var Presentation = require("./presentation");
var PresentationStateMachine = require("./presentationStateMachine");
var Slide = require("./slide");
var Arboreal = require("./arboreal");

function start(port, route, slideControllerHandler, presentation) 
{
	// TODO In the future pass in the presentation
	// for now create the presentation locally
	
	// TODO Do something with the slide event handler
	
	// Slide deck variables
	var presentation = createPresentation();
	var presentation_state_machine = presentation.state_machine;
	presentation_state_machine.start();
	
	// Server variables
	var port = port;
	
	function onRequest(request, response) 
	{
		route(presentation, slideControllerHandler, request, response);
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port.toString() + ".");
}

function createPresentation(slideEventHandler)
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
	var slide_a = new Slide(0, "A");
	slide_a.presentation = presentation;
	a.data = slide_a;
	
	a.appendChild();
	var b = a.children[0];
	var slide_b = new Slide(1, "B");
	slide_b.presentation = presentation;
	b.data = slide_b;
	
	b.appendChild();
	var c = b.children[0];
	var slide_c = new Slide(2, "C");
	slide_c.presentation = presentation;
	c.data = slide_c;
	
	// Second leg
	c.appendChild();
	var d = c.children[0];
	var slide_d = new Slide(3, "D");
	slide_d.presentation = presentation;
	d.data = slide_d;
	
	d.appendChild();
	var e = d.children[0];
	var slide_e = new Slide(4, "E");
	slide_e.presentation = presentation;
	e.data = slide_e;
	
	e.appendChild();
	var f = e.children[0];
	var slide_f = new Slide(5, "F");
	slide_f.presentation = presentation;
	f.data = slide_f;
	
	// Third leg
	c.appendChild();
	var g = c.children[1];
	var slide_g = new Slide(6, "G");
	slide_g.presentation = presentation;
	g.data = slide_g;
	
	g.appendChild();
	var h = g.children[0];
	var slide_h = new Slide(7, "H");
	slide_h.presentation = presentation;
	h.data = slide_h;
	
	// Fourth leg
	c.appendChild();
	var i = c.children[2];
	var slide_i = new Slide(8, "I");
	slide_i.presentation = presentation;
	i.data = slide_i;
	
	i.appendChild();
	var j = i.children[0];
	var slide_j = new Slide(9, "J");
	slide_j.presentation = presentation;
	j.data = slide_j;
	
	j.appendChild();
	var k = j.children[0];
	var slide_k = new Slide(10, "K");
	slide_k.presentation = presentation;
	k.data = slide_k;
	
	// Fifth leg
	k.appendChild();
	var l = k.children[0];
	var slide_l = new Slide(11, "L");
	slide_l.presentation = presentation;
	l.data = slide_l;
	
	l.appendChild();
	var m = l.children[0];
	var slide_m = new Slide(12, "M");
	slide_m.presentation = presentation;
	m.data = slide_m;
	
	// Sixth leg
	k.appendChild();
	var n = k.children[1];
	var slide_n = new Slide(13, "N");
	slide_n.presentation = presentation;
	n.data = slide_n;
	
	n.appendChild();
	var o = n.children[0];
	var slide_o = new Slide(14, "O");
	slide_o.presentation = presentation;
	o.data = slide_o;
	
	presentation_state_machine.setSlideTree(a);
	presentation.state_machine = presentation_state_machine;
	presentation_state_machine.presentation = presentation;
	
	return presentation;
}

exports.start = start;