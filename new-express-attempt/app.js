const express = require('express')
const sequelize = require('./server.js')
const product = require('./models/product.js')
//why have an empty import here??? Why does the log create a products table plural when everything is singular??
const app = express()

sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
}).catch(err=>console.log(err))
//app.listen(3000)