const User = require('../model/auth/user');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 const dotenv = require('dotenv');
dotenv.config();

    const {
            ACCESS_TOKEN_SECRET,
            ACCESS_TOKEN_LIFE,
            REFRESH_TOKEN_SECRET,
            REFRESH_TOKEN_LIFE
    } = process.env;

exports.signUp = async (req, res, next) => {
    
    try {
        const {role, userName, email, password, status} = req.body; 
        const passwordHash = bCrypt.hashSync(password, 8);

        verifyEmail =  await User.findOne({ where: {email} });
        
        if (verifyEmail) {
            return res.status(401).send({message: "this email has been taken by another user!"});
        } else {
            const user = await User.create({
            userName,
            role: role ? role : admin,
            email,
            passwordHash,
            status: status ? status : inactive            
        });  
                
        return res.json(user); 
        }
    } catch (error) {
        
    }    
};

exports.signIn = async (req, res, next) => {
    
        const {password, userName} = req.body;
        const userPass = await User.findOne({where: {userName}});
        const passIsValid = bCrypt.compareSync(password, userPass.passwordHash);
            if (!passIsValid) {
                return res.status(401).send({message: "invalid Password!"});   
            }
        // let token = req.headers["x-access-token"];

        //     console.log(token);

        let payload = {userPass};
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
        const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});

        return res.json(userPass); 
};

exports.getAll = async (req, res, next) => {
    try {
                const {limit, offset} = req.query;
        const user = await  User.findAll({limit, offset, include: [blog], });   
        return res.json(user)
        (next);
    } catch (error) {

    }   
};
