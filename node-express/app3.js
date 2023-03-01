const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use('/form', (req,res)=>{
    res.send('<form action="/subbed" method="POST"><input type="text" name="title"/><button type="submit">Submit me</button></form>')
})
app.post('/subbed', (req,res)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/u[a-z]{1,}',(req,res,next)=>res.send('<p>hey there users</p>'))
app.use('/',(req,res, next)=>res.send('<h1>hey there</h1>'))
app.listen(3000)