var dbPerson = require('../models/person')

var addPerson = (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.email) {
        res.json({
            success: false,
            msg: "All data not provided"
        })
    } else {
        var newperson = new dbPerson({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            createdBy: req.decoded._id,
            status: 0
        })
        newperson.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved",
                    data: data
                })
            }
        })
    }
}

module.exports = addPerson