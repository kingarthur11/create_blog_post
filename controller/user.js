const User = require('../model/user');
const blog = require('../model/blog');


exports.getAll = async (req, res, next) => {
    try {
         const {limit, offset} = req.query;

   const user = await  User.findAll({limit, offset, include: [blog], });   
    return res.json(user)
    (next);
    } catch (error) {
        
    }   
};

exports.getOne = (req, res, next) => {
    try {
         const id = req.params;

    const user = User.findById(id);
    return res.json(user)
        (next);
    } catch (error) {
        
    }   
};

exports.post = async (req, res, next) => {
    try {
         const {firstName, lastName, email, password, status} = req.body;       

        const user = await User.create({
            firstName,
            lastName,
            email,
            passwordHash,
            status: status ? status : inactive            
        });   
        console.log(passwordHash );    
        return res.json(user);           
    
    } catch (error) {
        
    }    
};

exports.deleteAll = (req, res, next) => {
    try {
          const user = User.destroy();
    return res.json(user)
        (next);
    } catch (error) {
        
    }  
};

exports.deleteOne = (req, res, next) => {
    try {
         const id = req.params;

    const user = User.destroy(id);
    return res.json(user)
        (next);
    } catch (error) {
        
    }   
};

exports.update = (req, res, next) => {
    try {
        const id = req.params;
     const {firstName, lastName, email, password} = req.body;
   
       const user = User.update({
            firstName,
            lastName,
            email,
            password
        },
        {
             where: {
               id
            }
        } ); 

    return res.json(user)
        (next);
    } catch (error) {
        
    }    
};

