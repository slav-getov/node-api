const sequelize = require('sequelize')
const {DataTypes} = require('sequelize')

sequelize.define('Test', {
    initialValue: {
        type:DataTypes.STRING,
        validate: {
            max: 50
        }
        
    }
});

sequelize.sync()