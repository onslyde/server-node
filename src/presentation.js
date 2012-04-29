

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
		console.log("Starting presentation.")
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
		if(this.slides != null && this.current_slide_index < this.slides.length - 2)
		{
			this.current_slide_index++;
			return this.slides[this.current_slide_index];
		}
		
		return null;
	},
	
	getPreviousSlide:	function()
	{
		if(this.slides != null && this.current_slide_index > 0)
		{
			this.current_slide_index--;
			return this.slides[this.current_slide_index];
		}
		
		return null;
	},
	
	getSlide:			function()
	{
		if(this.current_slide != null)
		{
			return this.current_slide;
		}
		
		return null;
	},
	
	getSlideIndex:		function()
	{
		return this.current_slide_index;
	}
	
};


module.exports = Presentation;

