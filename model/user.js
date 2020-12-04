const Sequelize = require('sequelize');
const dbs = require('./db');
const Product = require('./product');


const User = dbs.define("users", {
    userName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    pwd: {
       type: Sequelize.STRING
    },
 },
 {
      hooks: {
        beforeCreate: (user, cb) => {
            user.pwd = bcrypt.hashSync(
                user.pwd,
                bcrypt.genSaltSync(10),
                null
            );
            cb(null)
        }        
     }       
 });
     User.hasMany(Product, {as: Product.products});
     Product.belongsTo(User, { foreignKey: 'userId', as: "user" });

module.exports = User;

