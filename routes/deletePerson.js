var dbPerson = require('../models/person')

exports.delete = (req, res) => {
    if (!req.params.id) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    } else {
        dbPerson.findOneAndUpdate({ _id: req.params.id }, { $set: { status: -1 } }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Person not deleted."
                })
            } else {
                res.json({
                    success: true,
                    msg: "Person deleted."
                })
            }
        })
    }
}

// exports.delete = (req, res) => {
//     if (!req.body._id) {
//         res.json({
//             success: false,
//             msg: "Please enter all details."
//         })
//     } else {
//         dbPerson.remove({ _id: req.body._id }, (err, data) => {
//             if (err) {
//                 res.json({
//                     success: false,
//                     msg: "Person not deleted."
//                 })
//             } else {
//                 res.json({
//                     success: true,
//                     msg: "Person deleted."
//                 })
//             }
//         })
//     }
// }