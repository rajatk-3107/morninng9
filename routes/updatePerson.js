var dbPerson = require('../models/person')

var updatePerson = (req, res) => {
    if (!req.body._id || !req.body.name || !req.body.age || !req.body.email) {
        res.json({
            success: false,
            msg: "Please provide all details"
        })
    } else {
        dbPerson.findOneAndUpdate({ _id: req.body._id }, { $set: { name: req.body.name, age: req.body.age, email: req.body.email } }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data updated."
                })
            }
        })
    }
}

module.exports = updatePerson