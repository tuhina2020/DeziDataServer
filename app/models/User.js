// server/models/User.js
const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        username: String,
        password: String,
        feature_img: String, /* To be changed later */
        type: String, // is designer or normal user
        wishlist: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        cart: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
        orders: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Order'
            }
        ]
    }
);

// check how should i add user details

UserSchema.methods.addToWishlist = function(p) {
    this.wishlist.push(p)
    return this.save()
}
UserSchema.methods.addToCart = function(p) {
    this.cart.push(p)
    return this.save()
}
UserSchema.methods.addOrders = function(o) {
    this.orders.push(o)
    return this.save()
}

module.exports = mongoose.model('User', UserSchema)