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
            }
        },
        facebook: {
            "clientId": {
                "doc": "The Client ID from Facebook to use for authentication",
                "default": "",
                "env": "298887914212333"
            },
            "clientSecret": {
                "doc": "The Client Secret from Facebook to use for authentication",
                "default": "",
                "env": "FACEBOOK_CLIENTSECRET"
            }
        },
        token: {
            secret: {
                doc: 'The signing key for the JWT',
                default: 'mySuperSecretKey',
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