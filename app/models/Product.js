// server/models/Product.js
const mongoose = require('mongoose')
let ProductSchema = new mongoose.Schema(
    {
        name: String,
        description: { type: String, default: ""},
        gender:String,
        price:{ type: String, default: "NA" },
        feature_img: String, /* To be changed later there might be multiple, so array*/
        likes: { type: Number, default:0 },
        inCart: {type: Boolean, default:false },
        category:String,
        type:String,
        designer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Designer'
        },
        sizes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Size'
            }
        ],
        properties: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Property'
            }
        ]
    }
);

ProductSchema.methods.addDesigner = function (designer_id) {
    this.designer = designer_id
    return this.save()
}

/*check whether it is just get or get all 
ProductSchema.methods.getProduct = function (_id) {
    Designer.find({'designer': _id}).then((product) => {
        return product
    })
}*/
ProductSchema.methods.like = function() {
    this.likes++
    return this.save()
}

ProductSchema.methods.addProperties = function(p) {
    this.properties.push(p)
    return this.save()
}
ProductSchema.methods.addSizes = function(s) {
    this.sizes.push(s)
    return this.save()
}
// get all sizes
// get all hashtags
// get complete product with all featres

module.exports = mongoose.model('Product', ProductSchema)