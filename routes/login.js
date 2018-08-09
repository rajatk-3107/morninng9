var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "please try again"
                })
            } else if (!loginData || loginData == null) {
                res.json({
                    success: false,
                    msg: "Please register first."
                })
            } else if (loginData.password != req.body.password) {
                res.json({
                    msg: "Password incorrect"
                })
            } else {
                var tokenData = {
                    _id: loginData._id,
                    name: loginData.name
                }
                var token = jwt.sign(tokenData, req.app.get('secret'))
                res.json({
                    success: true,
                    msg: "Successfully login.",
                    token: token
                })
            }
        })
    }
}