const User = require('../model/user');
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
        const {userName, email, password} = req.body;
        verifyEmail =  await User.findOne({ where: {email} });        
        if (verifyEmail) {
            return res.status(401).send({message: "this email has been taken by another user!"});
        } else {
        const user = await User.create({
                userName,
                email,
                pwd: password });                
            return res.json(user); 
        }        
    } catch (error) {
        
    }
};

exports.signIn = async (req, res, next) => {
    try {
        const {password, userName} = req.body;
        const userPass = await User.findOne({where: {userName}});
        const passIsValid = bCrypt.compareSync(password, userPass.passwordHash);
        if (!passIsValid) {
            return res.status(401).send({message: "invalid Password!"});   
        }
        let payload = {userPass};
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
        const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
            return res.json({userPass, accessToken}); 
    } catch (error) {
        
    }       
};

exports.getAll = async (req, res, next) => {
    try {         
        const {limit, offset} = req.query;
        const user = await  User.findAll({limit, offset });        
            return res.json(user)
        (next);
    } catch (error) {

    }   
};

exports.getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);    
            return res.json(user)
        (next);
    } catch (error) {
        
    }
};
