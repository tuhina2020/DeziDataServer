// server/models/Designer.js
const mongoose = require('mongoose')
let DesignerSchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        description: { type: String, default: "" },
        location:String,
        cta:String,
        designer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        collections: [
            {
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
                }
            }
        ],
        events: [
            {
                event: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Event'
                }
            }
        ],
        articles: [
            {
                article: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Article'
                }
            }
        ]
    }
);

DesignerSchema.methods.addDesigner = function (designer_id) {
    this.designer = designer_id
    return this.save()
}
DesignerSchema.methods.getDesignerProfile = function (_id) {
    Designer.find({'designer': _id}).then((designer) => {
        return designer
    })
}
DesignerSchema.methods.addProduct = function(p) {
    this.collections.push(p)
    return this.save()
}
DesignerSchema.methods.addFollower = function(f) {
    this.followers.push(p)
    return this.save()
}
DesignerSchema.methods.addEvent = function(e) {
    this.events.push(p)
    return this.save()
}
DesignerSchema.methods.addArticle = function(a) {
    this.events.push(a)
    return this.save()
}

module.exports = mongoose.model('Designer', DesignerSchema)