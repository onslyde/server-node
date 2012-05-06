// Libraries
// None

// Custom libraries
var Arboreal = require("./arboreal");
var Slide = require("./slide");

function PresentationStateMachine(name)
{
	this.name = name;
	this.current_slide_node = null;
	this.slide_tree = null;
};

PresentationStateMachine.prototype =
{
	setSlideTree:			function(slide_tree)
	{
		if(slide_tree != null)
		{
			this.slide_tree = slide_tree;
			this.current_slide_node = this.slide_tree; 
		}
	},
		
	start:					function()
	{
		console.log("Starting the presentation.");
		
		if(this.slide_tree != null)
		{
			this.current_slide_node = this.slide_tree;
			slide = this.current_slide_node.data;
			slide.enterSlide();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error starting the presentation because no slide tree present.");
		console.log(this.toString());
		
		return null;
	},
	
	restart:				function()
	{
		this.start();
	},
	
	getFirstSlide:			function()
	{
		console.log("Getting the first slide.");
		
		if(this.slide_tree != null)
		{
			this.current_slide_node = this.slide_tree;
			slide = this.current_slide_node.data;
			slide.enterSlide();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the first slide because no slide tree present.");
		console.log(this.toString());
		
		return null;
	},
	
	getLastSlide:			function()
	{
		console.log("Getting the last slide.");
		
		// Default last slide is the slide from the lowest branches
		if(this.slide_tree != null)
		{
			this.current_slide_node = this.slide_tree;
			this.current_slide_node = this.current_slide_node.children[0];
			while(this.current_slide_node != undefined)
			{
				this.current_slide_node = this.current_slide_node.children[0];
			}
			
			this.current_slide_node = this.current_slide_node.parent;
			if(this.current_slide_node == null)
			{
				this.current_slide_node = this.slide_tree;
			}
			
			slide = this.current_slide_node.data;
			slide.enterSlide();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the last slide because no slide tree present.");
		console.log(this.toString());
		
		return null;
	},
	
	getNextSlide:			function()
	{
		// TODO -> Finish this
		console.log("Getting the next slide.");
		
		if(this.slide_tree != null)
		{
			
		}
		
		console.log("Error getting the next slide because no slide tree present.");
		console.log(this.toString());
		
		return null;
	},
	
	getPreviousSlide:		function()
	{
		// TODO
	},
	
	getCurrentSlide:		function()
	{
		// TODO
	},
	
	chooseBranch:			function(branch)
	{
		// TODO
	},
	
	returnToBranch:			function()
	{
		// TODO
	},
	
	toString:				function()
	{
		// TODO
		return "---Presentation State---";
	}
};


module.exports = PresentationStateMachine;

