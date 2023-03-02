const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'testfield',
 'postgres',
 'Sdftyu23$&dfrthA',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);
// in the video demo no test connection has been done
// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });

module.exports = sequelize;