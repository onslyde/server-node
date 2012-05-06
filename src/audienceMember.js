// Libraries
// None

// Custom libraries
var User = require("./user");

AudienceMember.prototype = new User();

AudienceMember.prototype.constructor = AudienceMember;

function AudienceMember(name)
{
	this.name = name;
}

AudienceMember.prototype.toString = function()
{
	return this.name;
}


module.exports = AudienceMember;



