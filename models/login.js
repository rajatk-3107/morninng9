var mongoose = require('mongoose')
var Schema = mongoose.Schema

var login = new Schema({
    email: String,
    password: String,
    name: String
})

module.exports = mongoose.model('login', login)