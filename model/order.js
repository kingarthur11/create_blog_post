const Sequelize = require('sequelize');
const dbs = require('./db');

const Order = dbs.define("orders", {
    orderId: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
    quantity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
    purchasePrice: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
});
module.exports = Order;