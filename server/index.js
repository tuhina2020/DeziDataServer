const
    express = require('express'),
    // expressHandlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    helmet = require('helmet')
	passport = require('passport');
	cloudinary = require('cloudinary'),
	express_graphql = require('express-graphql'),
	// { buildSchema } = require('graphql');
	FacebookStrategy = require('passport-facebook').Strategy;
	config = require('./config.js'),
	expressValidation = require('express-validation'),
	app = express()


module.exports = function() {
    let create = function(config) {
      let routes = require('../app/routes');
	  const url = process.env.MONGODB_URI || "mongodb://localhost:27017/modalle"

		  /** configure cloudinary */
	  cloudinary.config({
	      cloud_name: 'modalle',
	      api_key: '791623624397341',
	      api_secret: '-Gj5F9Cl6G8XLXTngIwr32M76IQ'
	  })
	  const options = {poolSize: 10};
	  mongoose.connect(url, options);

	  mongoose.connection.on('Opening', () => {
	    console.log('Reconnecting... %d', mongoose.connection.readyState);
	  });

	  mongoose.connection.once('open', () => {
	    console.log('Database connection opened');
	  });

	  mongoose.connection.on('error', (error) => {
	    console.log('Database connection error %s', error);
	  });

	  mongoose.connection.on('reconnected', () => {
	    console.log('Database reconnected');
	  });

	  mongoose.connection.on('disconnected', () => {
	    console.log('Database disconnected');
	    mongoose.connect(url, options);
	  });


	  /** set up middlewares */
	  // app.use(cors())
	  app.use(helmet())
	  app.use(passport.initialize());
	  //app.use('/static',express.static(path.join(__dirname,'static')))

	  app.use(bodyParser.urlencoded({ extended: true }));
	  app.use(bodyParser.json());
	  console.log(config.get('authentication.facebook'))
	  passport.use(new FacebookStrategy(config.get('authentication.facebook'),
	  function(accessToken, refreshToken, profile, done) {
	    // asynchronous verification, for effect...
	    process.nextTick(function () {
	      
	      // To keep the example simple, the user's Facebook profile is returned to
	      // represent the logged-in user.  In a typical application, you would want
	      // to associate the Facebook account with a user record in your database,
	      // and return that user instead.
	      return done(null, profile);
	    });
	  }
	));

	  app.set('port', config.get('http.port'));
	  app.set('hostname', 'localhost');
	  // passport setting
		passport.serializeUser(function(user, done) {
		  done(null, user);
		});

		passport.deserializeUser(function(obj, done) {
		  done(null, obj);
		});

      // Set up routes
      routes.init(app);
    };

    let start = function() {
        let hostname = app.get('hostname'),
            port = app.get('port');

        app.listen(port, function () {
            console.log('Express app listening on - http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};