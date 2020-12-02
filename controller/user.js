const User = require('../model/auth/user');
const Blog = require('../model/blog/blog');
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

exports.verifyToken = (req, res, next) => {
        let token = req.headers.authorization;

        if (!token) {
                return res.status(403).send({message: 'you dont have a token'});
        }
        jwt.verify(token,  ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                        return res.status(401).send({message: "you are not authorised to view this"});
                }
            req.userId = decoded.id;
        });
        
        next();
};
exports.signIn = async (req, res, next) => {
    
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
};

exports.getAll = async (req, res, next) => {
    try {
        const {limit, offset} = req.query;
        const user = await  User.findAll({limit, offset, include: [Blog] });   
        return res.json(user)
        (next);
    } catch (error) {

    }   
};

exports.getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id, { include: [Blog]});    
        return res.json(user)
        (next);
    } catch (error) {
        
    }
};
