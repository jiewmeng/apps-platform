var router = require('express').Router();
var passport = require('passport');

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/success', function(req, res) {
	var user = JSON.parse(req.session.passport.user);
	res.json({
		facebookId: user.id,
		facebookAccessToken: user.accessToken
	});
});

router.get('/facebook/fail', function(req, res) {
	res.json({error: 'Failed to login with facebook'}, 400);
});

router.get('/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/auth/facebook/success',
	failureRedirect: '/auth/facebook/fail'
}));

router.get('/logout', function(req, res) {
	req.logout();
	res.json({success: true});
});

module.exports = router;
