// server/app.js

/** require dependencies */
const express = require("express")
const routes = require('./app/routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const passport = require('passport');
const cloudinary = require('cloudinary')
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');


const schema = buildSchema(`
    type Query {
        message: String
    }
`);


var root = {
    message: () => 'Hello World!'
};

const app = express();
// const router = express.Router()
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

const port = process.env.PORT || 3000;

/** set up routes {API Endpoints} */
// routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use(passport.initialize());
app.use(passport.session());
//app.use('/static',express.static(path.join(__dirname,'static')))

// app.use('/', router);
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});