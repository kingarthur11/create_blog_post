const User = require("../model/auth/user");
const bCryt = require('bcrypt');

const checkDuplicatedEmail = (req, res, next) => {
    const {email, password} = req.body;
    const passwordHash = bCryt.hashSync(password, 10);

    const checkeEmail = User.findOne({
            email
    });

    if (checkeEmail) {
            res.status(400).send({message: "fail to create new user, this user already exist"});
            return;
    }  
};


            