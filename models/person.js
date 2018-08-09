const mongoose = require('mongoose')
const Schema = mongoose.Schema

var newPerson = new Schema({
    name: String,
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    status: Number,
    createdBy: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('people', newPerson)