var app = require('express')();

app.get('/', function index(req, res) {
	res.send('Apps Platform!!!');
});

require('./modules/auth/auth.js')(app);

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Apps Platform listening at http://%s:%s', host, port);
});
