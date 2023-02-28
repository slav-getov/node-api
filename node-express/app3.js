const express = require('express')

const app = express()


app.use('/users',(req,res,next)=>{
    res.send('<p>hey there users</p>')
    
})

app.use('/',(req,res, next)=>res.send('<h1>hey there</h1>'))

app.listen(3000)