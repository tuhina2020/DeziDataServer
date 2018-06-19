// server/routes/index.js
const product = require('./product')
const designer = require('./designer')
module.exports = (router) => {
    product(router)
    designer(router)
}