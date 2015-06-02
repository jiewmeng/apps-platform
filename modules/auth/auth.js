var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../../config');
var _ = require('lodash');
var User =  require('./models/User');

/**
 * Initializer for authentication module
 *
 * @param app {object} The express app
 * @return {object}
 */
module.exports = function(app) {
	// init passport
	app.use(passport.initialize());

	passport.serializeUser(function(user, done) {
		done(undefined, JSON.stringify(user));
	});

	passport.deserializeUser(function(user, done) {
		done(undefined, JSON.parse(user));
	});

	passport.use(new FacebookStrategy({
		clientID: config.FB_APP_ID,
		clientSecret: config.FB_APP_SECRET,
		callbackURL: `${config.URL}/auth/facebook/callback`
	}, function(accessToken, refreshToken, profile, done) {
		// determine if user exists
		User.filter({ facebookId: profile.id }).run()
			.then(function(users) {
				console.log('found', users);
				var user = users[0];

				// if user does not exists, create one
				if (!user) {
					console.log('creating user');
					return User.save({
						displayName: profile.displayName,
						facebookId: profile.id
					});
				}

				console.log('returning user')
				return user;
			})
			.then(function(user) {
				done(undefined, Array.isArray(user) ? user[0] : user);
			})
			.catch(function(err) {
				done(err);
			});
	}));

	// routes
	app.use('/auth', require('./router.js'));
};
