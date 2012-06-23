// Libraries
// None

// Custom libraries
// None

function WsMsgHandler(name)
{
	this.name = name;
}

WsMsgHandler.prototype.toString = function()
{
	return this.name;
};


module.exports = WsMsgHandler;