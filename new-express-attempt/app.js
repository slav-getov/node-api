const express = require('express')
const sequelize = require('./server.js')
const product = require('./models/product.model.js')
const bodyParser = require('body-parser')
//some routes
const products = require('./routes/product.routes.js')
//why have an empty import here??? 
const app = express()
//we add this because we just do, awesome idea
app.use(express.json());
// //does the order here matter?
app.use(bodyParser.urlencoded({extended:false}));
app.use('/products', products)

//do I need sequelize here
sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
}).catch(err=>console.log(err))
//app.listen(3000)


//app.use('/products', products)
