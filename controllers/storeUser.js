const User = require('../models/User')

module.exports = (req, res) => {
    User.create(req.body).then(()=>{
        console.log("User registererd successfully!");
        res.redirect('/')
    }).catch((error)=>{
        const e = error.errors 
        const validationErrors = Object.keys(e).map ((key)=>{return e[key].message }) 
        // console.log(validationErrors);
        req.flash('validationErrors', validationErrors)
        req.flash('data', req.body)
        return res.redirect('/register')
    })
}