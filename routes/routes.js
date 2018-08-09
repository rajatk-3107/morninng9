var express = require('express')
var app = express.Router()
var tokenVerify = require('./tokenVerify')

var addPerson = require('./addPerson')
app.post('/addPerson', tokenVerify, addPerson)

var allPersons = require('./allPerson')
app.get('/allPersons', tokenVerify, allPersons.allPersons)

var updatePerson = require('./updatePerson')
app.post('/updatePerson', tokenVerify, updatePerson)

var deletePerson = require('./deletePerson')
app.get('/deletePerson/:id', tokenVerify, deletePerson.delete)

var register = require('./register')
app.post('/register', register.register)

var login = require('./login')
app.post('/login', login.login)

module.exports = app;