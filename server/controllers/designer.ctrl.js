/** server/controllers/designer.ctrl.js */
const Designer = require('./../models/Designer')

module.exports = {
    addDesigner: (req, res, next) => {
        let { name, image, description, location, cta } = req.body
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
    getAll: (req, res, next) => {
        Designer.find(req.params.id).exec((err, designer)=> {
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
    getDesigner: (req, res, next) => {
        Designer.findById(req.params.id).exec((err, designer)=> {
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