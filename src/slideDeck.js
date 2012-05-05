// Libraries
// None

// Custom libraries
var Slide = require("./slide");

function SlideDeck(name)
{
	this.name = name;
	this.current_slide_index = 0;
	this.slides = null;
};

SlideDeck.prototype =
{
	setSlides:			function(slides)
	{
		this.current_slide_index = 0;
		this.slides = slides;
	},
	
	start:				function()
	{
		console.log("Starting slide deck.");
		this.current_slide_index = 0;
		
		if(this.slides != null && this.slides.length > 0)
		{
			this.slides[this.current_slide_index].enterSlide();
			console.log(this.toString());
			return this.slides[this.current_slide_index];
		}
		
		console.log("Error starting slide deck.");
		console.log(this.toString());
		
		return null;
	},
	
	restart:			function()
	{
		this.start();
	},
	
	getNextSlide:		function()
	{
		if(this.slides != null && this.current_slide_index < this.slides.length - 1)
		{
			console.log("Getting next slide.");
			return this.getSlideAt(this.current_slide_index + 1);
		}
		
		console.log("Error getting next slide.");
		console.log(this.toString());
		
		return null;
	},
	
	getPreviousSlide:	function()
	{
		if(this.slides != null && this.current_slide_index > 0)
		{
			console.log("Getting previous slide.");
			return this.getSlideAt(this.current_slide_index - 1);
		}
		
		console.log("Error getting previous slide.");
		console.log(this.toString());
		
		return null;
	},
	
	getSlide:			function()
	{
		if(this.slides != null && this.slides[this.current_slide_index] != null)
		{
			console.log(this.toString());
			return this.slides[this.current_slide_index];
		}
		
		console.log("Error getting slide.");
		console.log(this.toString());
		
		return null;
	},
	
	getSlideAt:			function(index)
	{
		this.slides[this.current_slide_index].exitSlide();
		this.setSlideIndex(index);
		this.slides[this.current_slide_index].enterSlide();
		this.getSlide();
	},
	
	getSlideIndex:		function()
	{
		return this.current_slide_index;
	},
	
	setSlideIndex:		function(index)
	{
		if(index > -1 && index < this.slides.length)	
		{
			this.current_slide_index = index;
			return this.current_slide_index;
		}
		
		console.log("Error setting slide index.");
		console.log(this.toString());
	},
		
	toString:			function()
	{
		if(this.slides != null)
		{
			return "Current slide, " + this.slides[this.current_slide_index].toString() + ", is number " + (this.current_slide_index + 1) + " out of " + this.slides.length + " slides.";
		}
		
		return "There are no slides in the slide deck.";
	}
	
};


module.exports = SlideDeck;

