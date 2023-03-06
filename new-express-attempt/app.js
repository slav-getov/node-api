const express = require('express')
const sequelize = require('./server.js')
const Product = require('./models/product.model.js')
const Client = require('./models/client.model.js')
const Supplier = require('./models/supplier.model.js')
const Order = require('./models/order.model.js')
const Warehouse = require('./models/warehouse.model.js')
const WarehouseProduct = require('./models/warehouseProduct.model.js')

const bodyParser = require('body-parser')
//some routes
const products = require('./routes/product.routes.js')
const users = require('./routes/user.routes.js')
const clients = require('./routes/client.routes.js')
const app = express()

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use('/products', products)
app.use('/users', users)
app.use('/clients', clients)
app.use((req,res,next)=>res.send('<p>error</p>'))

//lets set up our relations! Just before sync!
Product.belongsTo(Supplier)
Product.belongsTo(Order)
Client.belongsTo(Order)
Product.belongsToMany(Warehouse, {through: WarehouseProduct})
Warehouse.belongsToMany(Product, {through: WarehouseProduct})
//end of relations!
sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
}).catch(err=>console.log(err))
//app.listen(3000)


//app.use('/products', products)
