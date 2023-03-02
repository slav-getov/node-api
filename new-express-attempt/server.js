const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('exprtest', 'postgres', 'Sdftyu23$&dfrthA', {
    dialect: 'postgres',
    host: 'localhost'
})


module.exports = sequelize