//import
const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const indexController = require('./controllers/indexController')

//configuration
app.use(express.static('public')) // use static folder -> public folder
app.use(express.json())     // 
app.use(express.urlencoded())
app.use(flash())
app.set('view-engine','ejs')

app.get('/',indexController)

app.listen(4000,()=>{
    console.log('LISTENING : http://localhost:4000');
})