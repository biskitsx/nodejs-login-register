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
const loginUserController = require('./controllers/loginUserController')
const logoutController = require('./controllers/logoutController')
const homeController = require('./controllers/homeController')
//MongoDB connection
mongoose.connect('mongodb+srv://root:root@cluster0.qanuhx2.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser : true})
    .then(()=>{console.log('connected to MongoDB successfully !');})
    .catch((err)=>{console.log(err);})

global.loggedIn = null 
//Middleware
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleWare = require('./middleware/authMiddleWare')
//configuration
app.use(express.static('public')) // use static folder -> public folder
app.use(express.json())     // 
app.use(express.urlencoded())
app.use(flash())
app.set('view-engine','ejs')
app.use(expressSession({
    secret : "node secret"
}))
app.use("*",(req,res,next)=> {
    loggedIn = req.session.userId
    console.log(loggedIn);
    next()
})

//routes
app.get('/',,indexController)
app.get('/login',redirectIfAuth,loginController)
app.get('/register',redirectIfAuth,registerController)
app.post('/user/register',redirectIfAuth, storeUser)
app.post('/user/login',redirectIfAuth,loginUserController)
app.get('/logout',logoutController)
app.get('/home',authMiddleWare,homeController)

//listening
app.listen(4000,()=>{
    console.log('LISTENING : http://localhost:4000');
})