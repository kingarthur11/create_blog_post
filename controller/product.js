const Product = require('../model/product');

exports.getAll = async (req, res, next) =>{
    try {   
    const product = await Product.findAll();   
        return res.json(product)
        (next);
    } catch (error) {
        
    }
};
  
exports.getOne = (req, res, next) => {
    try {
         const {id} = req.params;
    const product = Product.findByPk(id);
         return res.json(product)
    (next);
    } catch (error) {
        
    }
};

exports.post = async (req, res, next) => {
    try {
        const {
            name,
            price,
            desc,
            quantity,
            imag,
            active   
        } = req.body;

        const product =await Product.create({
            name,
            price,
            desc,
            quantity,
            imag,
            active: active ? active : false,            
        });     
        return res.json(product)
            (next);
    } catch (error) {
        
    }
   
};

exports.deleteAll = (req, res, next) => {
    try {
     const product = Product.destroy();
    return res.json(product)
        (next);

    } catch (error) {
        
    }
};
   

exports.deleteOne = (req, res, next) => {
    try {
    const {id} = req.params;

    const product = Product.destroy(id);
    return res.json(product)
        (next);
    } catch (error) {
        
    }    
};


exports.update = (req, res, next) => {
    try {
         const {id} = req.params;
         const {
            name,
            price,
            desc,
            quantity,
            imag,
            active   
        } = req.body;
   
       const product = Product.update({        
            name,
            price,
            desc,
            quantity,
            imag,
            active         
        },
        {
            where: {id}
        });
    return res.json(product)
        (next);
    } catch (error) {
        
    }   
};
