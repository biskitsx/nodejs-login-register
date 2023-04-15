const User = require('../models/User')

module.exports = (req, res) => {
    User.create(req.body).then(()=>{
        console.log("User registererd successfully!");
        res.redirect('/')
    }).catch((error)=>{
        const e = error.errors 
        const validationErrors = Object.keys(e).map((key)=>{
            return e.key
        })
        console.log(validationErrors);
    })
}