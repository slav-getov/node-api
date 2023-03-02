const express = require('express')
const sequelize = require('./server.js')
const product = require('./models/product.model.js')
const bodyParser = require('body-parser')
//some routes
const products = require('./routes/product.routes.js')
//why have an empty import here??? Why does the log create a products table plural when everything is singular??
const app = express()

//does the order here matter?
app.use(bodyParser.urlencoded({extended:false}));
app.use('/products', products)
//do I need sequelize here
sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
}).catch(err=>console.log(err))
//app.listen(3000)
