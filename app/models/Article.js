//server/models/Article.js
const mongoose = require('mongoose')
let ArticleSchema = new mongoose.Schema();
module.exports = mongoose.model('Article', ArticleSchema)