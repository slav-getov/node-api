const express = require('express')
const sequelize = require('./server.js')

const app = express()

const PORT = 4000

sequelize.sync().then(result=>{
    console.log(result)
    app.listen(PORT)
}).catch(err=>console.log(err))

