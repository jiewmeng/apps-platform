var thinky = require('thinky')();
var type = thinky.type;

var User = thinky.createModel('User', {
	id: type.string(),
	displayName: type.string(),
	facebookId: type.string()
});

module.exports = User;
