const convict = require('convict');

const config = convict({
    http: {
        port: {
            doc: 'The port to listen on',
            default: 3000,
            env: 'PORT'
        }
    },
    authentication: {
        google: {
            "clientId": {
                "doc": "The Client ID from Google to use for authentication",
                "default": "",
                "env": "556799628956-s63rjffbfm3bjsd707anackh7tdr8neo.apps.googleusercontent.com"
            },
            "clientSecret": {
                "doc": "The Client Secret from Google to use for authentication",
                "default": "",
                "env": "3aXrQzhvEWlSxv1gU2ZU0hRP"
            },
            "callbackURL": {
            	doc: 'url called after fb',
            	default: 'http://dev.elanic.in/auth/google'
            }
        },
        facebook: {
            "clientID": {
                "doc": "The Client ID from Facebook to use for authentication",
                "default": "298887914212333",
                "env": "FACEBOOK_CLIENTID"
            },
            "clientSecret": {
                "doc": "The Client Secret from Facebook to use for authentication",
                "default": "97a6b10479d7104515d821919524aeb2",
                "env": "FACEBOOK_CLIENTSECRET"
            },
            "callbackURL": {
            	doc: 'url called after fb',
            	default: 'http://localhost:3000/user/auth/facebook/callback'
            }
        },
        token: {
            secret: {
                doc: 'The signing key for the JWT',
                default: Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex'),
                env: 'JWT_SIGNING_KEY'
            },
            issuer: {
                doc: 'The issuer for the JWT',
                default: 'social-logins-spa'
            },
            audience: {
                doc: 'The audience for the JWT',
                default: 'social-logins-spa'
            }
        }
    }
});

config.validate();

module.exports = config;