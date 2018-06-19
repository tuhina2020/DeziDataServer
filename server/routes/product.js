//server/routes/product.js

const productcontroller = require('./../controllers/product.ctrl.js')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    /**
     * get all products
     */
    router
        .route('/products')
        .get(productcontroller.getAll)
    /**
     * add a product
     */
    router
        .route('/product')
        .post(multipartWare, productcontroller.addProduct)
    /**
     * get a particlular product to view
     */
    router
        .route('/product/:id')
        .get(productcontroller.getProduct)
};