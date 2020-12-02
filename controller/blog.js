const Blog = require('../model/blog/blog');
const User = require('../model/auth/user');

exports.getAll = async (req, res, next) =>{
    try {
    // const {limit, offset, title, body, author, allowComment } = req.query;
    
    const blog = await Blog.findAll(); console.log(blog)  
        return res.json(blog)
        (next);
    } catch (error) {
        
    }
};
  
exports.getOne = (req, res, next) => {
    try {
         const blogId = req.params;

    const blog = Blog.findById({id: blogId});
    return res.json(blog)
    (next);
    } catch (error) {
        
     }
 };

exports.post = async (req, res, next) => {
    try {
        const {
            title,
            body,
            author,
            allowComment,
            userId   
        } = req.body;

        const blog =await Blog.create({
            title,
            body,
            author,
            allowComment: allowComment ? allowComment : false,
            userId
        });
    console.log(blog); 
        return res.json(blog)
            (next);
    } catch (error) {
        
    }
   
};

exports.deleteAll = (req, res, next) => {
    try {
     const blog = Blog.destroy();
    return res.json(blog)
        (next);

    } catch (error) {
        
    }
};
   

exports.deleteOne = (req, res, next) => {
    try {
    const blogId = req.params;

    const blog = User.destroy({id: blogId});
    return res.json(blog)
        (next);
    } catch (error) {
        
    }    
};


exports.update = (req, res, next) => {
    try {
         const blogId = req.params;
     const { title,
            body,
            author,
            allowComment  } = req.body;
   
       const blog = Blog.update({
            title,
            body,
            author,
            allowComment  
        },
        {
             where: {
               id: blogId
            }
        } ); 

    return res.json(blog)
        (next);
    } catch (error) {
        
    }   
};
