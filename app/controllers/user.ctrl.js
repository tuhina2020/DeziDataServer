/** server/controllers/User.ctrl.js */
const User = require('./../models/User')

module.exports = {
    create: (req, res, next) => {
        saveUser(req.body)
        function saveUser(obj) {
            new User(obj).save((err, User) => {
                if (err)
                    res.send(err)
                else if (!User)
                    res.send(400)
                else return res.send(User)
                next()
            })
        }
    },
    update: (req, res, next) => {
        const { email, username, phone: {number}, profile_picture } = req.body;
        const id = req.params.id;
        updateUser({ email, username, phone: {number}, profile_picture });
        function updateUser(id, obj) {
            User.update({}).lean().exec((err, User) => {
                if (err)
                    res.send(err)
                else if (!User)
                    res.send(400)
                else return res.send(User)
                next()
            })
        }
    },
    get: (req, res, next) => {
    	const id = req.params.id;
    	console.log('are we in get : ', id)
    	const filter = id === 'all' ? {} : { _id: id };
        User.find(filter).lean().exec((err, User)=> {
            if (err)
                res.send(err)
            else if (!User)
                res.send(404)
            else
                res.send(User)
            next()            
        })
    },
    delete: (req, res, next) => {
        User.remove({_id: req.params.id}).lean().exec((err, User)=> {
            if (err)
                res.send(err)
            else if (!User)
                res.send(404)
            else
                res.send(User)
            next()            
        })
    }
};