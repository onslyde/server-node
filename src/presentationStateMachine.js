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
			slide.enter();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error starting the presentation because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	restart:				function()
	{
		slide = this.current_slide_node.data;
		slide.exit();
		this.start();
	},
	
	getFirstSlide:			function()
	{
		console.log("Getting the first slide.");
		
		if(this.slide_tree != null)
		{
			slide = this.current_slide_node.data;
			slide.exit();
			this.current_slide_node = this.slide_tree;
			slide = this.current_slide_node.data;
			slide.enter();
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
			slide = this.current_slide_node.data;
			slide.exit();
			
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
			slide.enter();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the last slide because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	getNextSlide:			function()
	{
		console.log("Getting the next slide.");
		
		if(this.slide_tree != null)
		{
			if(this.current_slide_node.children == '')
			{
				console.log("Error getting the next slide because there are no more slides.");
				console.log(this.toString());
				return null;
			}
			else if(this.current_slide_node.children.length != 1)
			{
				console.log("Error getting the next slide because there are multiple different next slides.");
				console.log(this.toString());
				return null;
			}
			
			slide = this.current_slide_node.data;
			slide.exit();
			this.current_slide_node = this.slide_tree.children[0];
			slide = this.current_slide_node.data;
			slide.enter();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the next slide because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	getPreviousSlide:		function()
	{
		console.log("Getting the previous slide.");
		
		if(this.slide_tree != null)
		{
			if(this.current_slide_node.parent == null)
			{
				console.log("Error getting the previous slide because the current slide is the first slide.");
				console.log(this.toString());
				return null;
			}
			
			slide = this.current_slide_node.data;
			slide.exit();
			this.current_slide_node = this.slide_tree.parent;
			slide = this.current_slide_node.data;
			slide.enter();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the previous slide because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	getCurrentSlide:		function()
	{
		console.log("Getting the current slide.");
		
		if(this.slide_tree != null)
		{
			slide = this.current_slide_node.data;
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the current slide because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	chooseBranch:			function(branch)
	{
		console.log("Choosing a  branch slide.");
		
		if(this.slide_tree != null)
		{
			if(this.current_slide_node.children == '')
			{
				console.log("Error choosing a branch because there are no more slides.");
				console.log(this.toString());
				return null;
			}
			else if(branch < 0 || branch >= this.current_slide_node.children.length)
			{
				console.log("Error choosing a branch because the choice is out of the range of choices.");
				console.log(this.toString());
				return null;
			}
			
			slide = this.current_slide_node.data;
			slide.exit();
			this.current_slide_node = this.slide_tree.children[branch];
			slide = this.current_slide_node.data;
			slide.enter();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error choosing a branch slide because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	returnToBranch:			function()
	{
		console.log("Getting the slide before the current branch.");
		
		if(this.slide_tree != null)
		{
			if(this.current_slide_node.parent == null)
			{
				console.log("Error getting the previous branch slide because the current slide is the first slide.");
				console.log(this.toString());
				return null;
			}
			
			slide = this.current_slide_node.data;
			slide.exit();
			this.current_slide_node = this.current_slide_node.parent;
			
			while(this.current_slide_node != null)
			{
				if(this.current_slide_node.children.length > 1)
				{
					break;
				}
				
				this.current_slide_node = this.current_slide_node.parent;
			}
			
			slide = this.current_slide_node.data;
			slide.enter();
			console.log(this.toString());
			return slide;
		}
		
		console.log("Error getting the slide before the current branch because no slide tree present.");
		console.log(this.toString());
		return null;
	},
	
	toString:				function()
	{
		output = '';
		
		if(this.slide_tree != null)
		{
			output = 'The current slide is: ' + this.current_slide_node.toString();
		}
		else
		{
			output = 'The state machine is empty and needs to be given an initial state and slide tree.';
		}
		
		return output;
	}
};


module.exports = PresentationStateMachine;

