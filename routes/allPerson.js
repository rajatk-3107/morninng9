var dbPerson = require('../models/person')
exports.allPersons = (req, res) => {
    dbPerson.find({ status: { $ne: -1 }, createdBy: req.decoded._id }, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Error"
            })
        } else {
            res.json({
                success: true,
                msg: "All data",
                data: data
            })
        }
    })
}