/** server/controllers/product.ctrl.js*/
const Product = require('./../models/Product')

module.exports = {
    addProduct: (req, res, next) => {
        let { name, description, price, gender, type, feature_img} = req.body
        saveProduct({ name, description, price, gender, type, feature_img: '' })
        function saveProduct(obj) {
            new Product(obj).save((err, product) => {
                if (err)
                    res.send(err)
                else if (!product)
                    res.send(400)
                else {
                    return product.addDesigner(req.body.designer).then((_product) => {
                        return res.send(_product)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Product.find(req.params.id)
        .populate('designer').exec((err, product)=> {
            if (err)
                res.send(err)
            else if (!article)
                res.send(404)
            else
                res.send(product)
            next()            
        })
    },
    /**
     * product_id
     */
    likeProduct: (req, res, next) => {
        Product.findById(req.body.product_id).then((product)=> {
            return product.like().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * article_id
     */
    getProduct: (req, res, next) => {
        Product.findById(req.params.id)
        .populate('designer').exec((err, product)=> {
            if (err)
                res.send(err)
            else if (!product)
                res.send(404)
            else
                res.send(product)
            next()            
        })
    }
};