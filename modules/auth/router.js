var router = require('express').Router();
var passport = require('passport');

router.get('/facebook', passport.authenticate('facebook', {session: false}));

router.get('/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/auth/loggedin',
	failureRedirect: '/auth/login'
}));

router.get('/loggedin', function(req, res) {
	res.json({success: true});
});

router.get('/login', function(req, res) {
	res.json({message: 'failed to login'});
});

module.exports = router;
