const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email : {
        type : String,
        required : [true, 'Please provide email']
    },
    password : {
        type : String,
        required : [true, 'Please provide password']
    }
})

console.log("not here");

UserSchema.pre('save', function(next) {
    const user = this 
    console.log("hello");
    bcrypt.hash(user.password, 10).then((hash)=>{
        user.password = hash 
        next()
    }).catch((err)=>{
        console.log(err.errors);
    })
});



const User = mongoose.model('User',UserSchema)
module.exports = User

