const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express-test', 'postgres', 'Sdftyu23$&dfrthA', {
    host: 'localhost',
    dialect: 'postgres'
});

const testDbConnection = async () =>{
   try {
    console.log('db good so far...')
    await sequelize.authenticate();
   } catch (error) {
    console.log(error)
   }
}


module.exports = sequelize;
module.exports = testDbConnection;