const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../server.js')

const Warehouse = sequelize.define('warehouse', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numberOfCrew: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Warehouse;