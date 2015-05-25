var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../../config');

/**
 * @param app {object} The express app
 */
module.exports = function(app) {
	// routes
	var authRouter = require('./router.js');
	app.use('/auth', authRouter);

	// init passport
	passport.use(new FacebookStrategy({
		clientID: config.FB_APP_ID,
		clientSecret: config.FB_APP_SECRET,
		callbackURL: `${config.URL}/auth/facebook/callback`
	}, function(accessToken, refreshToken, profile, done) {
		console.log('accessToken:', accessToken);
		console.log('refreshToken:', refreshToken);
		console.log('profile', profile);

		done(null, profile);
	}));
};
