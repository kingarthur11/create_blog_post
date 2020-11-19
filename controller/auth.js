const User = require("../model/auth/user");
const jwt = require('jsonwebtoken');

const checkDuplicatedEmail = (req, res, next) => {
    const {email} = req.body;
   
    const checkeEmail = User.findOne({
            email
    });
    if (checkeEmail) {
            res.status(400).send({message: "fail to create new user, this user already exist"});
            return;
    }  
    next();  
};

const verifyToken = (req, res, next) => {
        let token = req.headers["x-access-token"];

        if (!token) {
                return res.status(403).send({message: 'you dont have a token'});
        }

        jwt.verify(token, SECRET, (err, decoded) => {
                if (err) {
                        return res.status(401).send({message: "you are not authorised to view this"});
                }
        });
        req.userId = decoded.id;
        next();
};
        
const authJwt = {
        verifyToken: verifyToken,
        checkDuplicatedEmail: checkDuplicatedEmail
};

module.exports = authJwt;