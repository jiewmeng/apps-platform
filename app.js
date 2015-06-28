var app = require('express')();
var session = require('express-session');
var RedisSession = require('connect-redis')(session);

app.use(session({
	store: new RedisSession(),
	secret: 'APPS_PLATFORM_SECRET_!%0%!',
	resave: false,
	saveUninitialized: false
}));

app.get('/', function index(req, res) {
	res.send('Apps Platform!!!');
});

// require module initializers
require('./modules/auth/auth.js')(app);

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Apps Platform listening at http://%s:%s', host, port);
});
