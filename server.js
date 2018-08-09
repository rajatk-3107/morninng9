const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var config = require('./config/config.json')
app.set('secret', config.secret)


mongoose.connect('mongodb://localhost/test', (err, data) => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log(err)
        console.log("Database connnected")
    }
})

var routes = require('./routes/routes')
app.use('/api', routes)



app.listen(8000, () => {
    console.log("Server started")
})