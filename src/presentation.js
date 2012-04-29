

function Presentation(name)
{
	this.name = name;
	this.current_slide_index = 0;
	this.slides = null;
};

Presentation.prototype =
{
	setSlides:			function(slides)
	{
		this.current_slide_index = 0;
		this.slides = slides;
	},
	
	start:				function()
	{
		console.log("Starting presentation.");
		console.log(this.toString());
		
		this.current_slide_index = 0;
		
		if(this.slides != null && this.slides.length > 0)
		{
			return this.slides[this.current_slide_index];
		}
		
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
			this.current_slide_index++;
			console.log(this.toString());
			return this.slides[this.current_slide_index];
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
			this.current_slide_index--;
			console.log(this.toString());
			return this.slides[this.current_slide_index];
		}
		
		console.log("Error getting previous slide.");
		console.log(this.toString());
		
		return null;
	},
	
	getSlide:			function()
	{
		if(this.slides != null && this.slides[this.current_slide_index] != null)
		{
			console.log("Getting current slide.");
			console.log(this.toString());
			return this.slides[this.current_slide_index];
		}
		
		return null;
	},
	
	getSlideAt:			function(index)
	{
		this.setSlideIndex(index);
		this.getSlide();
	},
	
	getSlideIndex:		function()
	{
		return this.current_slide_index;
	},
	
	setSlideIndex:		function(index)
	{
		console.log(index);
		if(index > -1 && index < this.slides.length)	
		{
			console.log("Setting current slide to " + index + ".");
			this.current_slide_index = index;
		}
	},
	
	toString:			function()
	{
		if(this.slides != null)
		{
			return "Current slide, " + this.slides[this.current_slide_index].toString() + ", is number " + (this.current_slide_index + 1) + " out of " + this.slides.length + " slides.";
		}
		
		return "There are no slides in the presentation.";
	}
	
};


module.exports = Presentation;

