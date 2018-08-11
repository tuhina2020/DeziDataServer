// server/models/User.js
const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        username: String,
        access_token: String,
        profile_picture: String, /* To be changed later */
        type: String,
        phone: {
            number: String
        },
    }
);



module.exports = mongoose.model('User', UserSchema)