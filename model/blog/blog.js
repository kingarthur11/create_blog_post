const Sequelize = require('sequelize');
const dbs = require('./db');



const Blog = dbs.define("blogs", {
    tile: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    allowComment: {
        type: Sequelize.BOOLEAN
    }
     
});     

module.exports = Blog;
