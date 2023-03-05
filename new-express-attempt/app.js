const express = require('express')
const sequelize = require('./server.js')
const Product = require('./models/product.model.js')
const Client = require('./models/client.model.js')
const bodyParser = require('body-parser')
//some routes
const products = require('./routes/product.routes.js')

const app = express()

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use('/products', products)
app.use((req,res,next)=>res.send('<p>error</p>'))

sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
}).catch(err=>console.log(err))
//app.listen(3000)


//app.use('/products', products)
