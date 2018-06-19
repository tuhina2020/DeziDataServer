//server/routes/product.js

const designercontroller = require('./../controllers/designer.ctrl.js')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    /**
     * get all products
     */
    router
        .route('/designers')
        .get(designercontroller.getAll)
    /**
     * add a product
     */
    router
        .route('/designer')
        .post(multipartWare, designercontroller.addDesigner)
    /**
     * get a particlular product to view
     */
    router
        .route('/designer/:id')
        .get(designercontroller.getDesigner)
};