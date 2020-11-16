const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const db = new Sequelize({
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
    });


db.authenticate()
    .then(() => {
        console.log('the connection is good');
    })
    .catch(err => {
        console.log('an error occured in the process');
    });
    
module.exports = db;