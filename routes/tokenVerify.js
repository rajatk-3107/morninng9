var jwt = require('jsonwebtoken')

var tokenVerify = (req, res, next) => {
    var token = req.headers.token;
    if (!token) {
        res.json({
            success: false,
            msg: "Unauthorized User"
        })
    } else {
        jwt.verify(token, req.app.get('secret'), (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Unauthorized access"
                })
            } else {
                req.decoded = decoded;
                next();
            }
        })
    }
}

module.exports = tokenVerify