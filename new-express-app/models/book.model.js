const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../server.js')

const Book = sequelize.define("book", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.INTEGER,
    }
 });

 module.exports = Book;
 