const express = require('express')
const app = express()
const {registor,login} = require('./controllers/auth.controller')
// const UserController = require('./controllers/user.controller')
app.use(express.json())
app.post('/login',login)
app.post('/register',registor)
// app.use('/users',UserController)
module.exports = app;