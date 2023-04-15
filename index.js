//import
const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

//import from controllers
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUser = require('./controllers/storeUser')

//MongoDB connection
mongoose.connect('mongodb+srv://root:root@cluster0.qanuhx2.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser : true})
    .then(()=>{console.log('connected to MongoDB successfully !');})
    .catch((err)=>{console.log(err);})

//configuration
app.use(express.static('public')) // use static folder -> public folder
app.use(express.json())     // 
app.use(express.urlencoded())
app.use(flash())
app.set('view-engine','ejs')

//routes
app.get('/',indexController)
app.get('/login',loginController)
app.get('/register',registerController)
app.post('/user/register', storeUser)

//listening
app.listen(4000,()=>{
    console.log('LISTENING : http://localhost:4000');
})