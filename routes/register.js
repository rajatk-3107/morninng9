var dbLogin = require('../models/login')

exports.register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please send all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try again after some time."
                })
            } else if (!loginData || loginData == null) {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }).save((err, data) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Please try again after some time."
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "You have successfully registered."
                        })
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: "You have already registered."
                })
            }
        })
    }
}