// Libraries
// None

// Custom libraries
var User = require("./user");

Presenter.prototype = new User();

Presenter.prototype.constructor = Presenter;

function Presenter(name)
{
	this.name = name;
}

Presenter.prototype.toString = function()
{
	return this.name;
}


module.exports = Presenter;



