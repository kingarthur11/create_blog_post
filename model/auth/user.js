const Sequelize = require('sequelize');
const dbs = require('../db');
// const Blog = require('../blog');


const User = dbs.define("users", {
    userName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    passwordHash: {
       type: Sequelize.STRING
    },
    status: {
         type: Sequelize.ENUM('active', 'inactive'),
         defaultValue: 'active'
     },
    role: {
         type: Sequelize.ENUM('admin', 'user'),
         defaultValue: 'user'
     }       
});

    // User.hasMany(Blog, {as: Blog.blog});
    // Blog.belongsTo(User, { foreignKey: 'userId', as: "user" });


module.exports = User;

