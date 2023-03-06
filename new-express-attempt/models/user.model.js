const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../server.js')

const User = sequelize.define('user', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User;