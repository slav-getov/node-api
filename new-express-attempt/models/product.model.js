const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../server.js')

const Product = sequelize.define('product', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0,12]
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Product;