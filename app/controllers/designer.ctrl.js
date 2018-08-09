/** server/controllers/designer.ctrl.js */
const Designer = require('./../models/Designer')

module.exports = {
    create: (req, res, next) => {
        const { name, image, description, location, cta } = req.body
        saveDesigner({ name, image, description, location, cta })
        function saveDesigner(obj) {
            new Designer(obj).save((err, designer) => {
                if (err)
                    res.send(err)
                else if (!designer)
                    res.send(400)
                else return res.send(designer)
                next()
            })
        }
    },
    update: (req, res, next) => {
        const { name, image, description, location, cta } = req.body;
        const id = req.params.id;
        updateDesigner({ name, image, description, location, cta });
        function updateDesigner(id, obj) {
            Designer.update({}).lean().exec((err, designer) => {
                if (err)
                    res.send(err)
                else if (!designer)
                    res.send(400)
                else return res.send(designer)
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Designer.find({}).lean().exec((err, designer)=> {
            if (err)
                res.send(err)
            else if (!designer)
                res.send(404)
            else{
                res.send(designer)
            }
            next()            
        })
    },
    /**
     * article_id
     */
    get: (req, res, next) => {
        Designer.findById(req.params.id).lean().exec((err, designer)=> {
            if (err)
                res.send(err)
            else if (!designer)
                res.send(404)
            else
                res.send(designer)
            next()            
        })
    },
    delete: (req, res, next) => {
        Designer.remove({_id: req.params.id}).lean().exec((err, designer)=> {
            if (err)
                res.send(err)
            else if (!designer)
                res.send(404)
            else
                res.send(designer)
            next()            
        })
    }
};