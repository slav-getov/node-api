const express = require('express')

const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
//these are the only needed lines for the basic app. now we just need the router
const app = express()
app.use(adminRouter)
app.use(shopRouter)
app.use((req,res,next)=>{
    res
    .status(404)
    .send('<h2>This is the error page</h2>')
})
app.listen(4000)