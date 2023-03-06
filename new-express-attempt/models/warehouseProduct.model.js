const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../server.js')

const WarehouseProduct = sequelize.define('warehouseProduct', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
})

module.exports = WarehouseProduct;