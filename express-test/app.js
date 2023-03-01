const sequelize = require('./config')
const testDbConnection = require('./config')
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, async()=>{
    await testDbConnection();
})