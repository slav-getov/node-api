const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../server.js')

const Order = sequelize.define('order', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Order;