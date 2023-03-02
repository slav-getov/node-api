const express = require('express')

const router = express.Router()

//const getAllProducts = require('../controllers/product.controller.js')
const createProduct = require('../controllers/product.controller.js')

//router.get('/', getAllProducts)
router.post('/', createProduct)
//^used to (req,res,next)=>{
    //console.log(req.body)

router.get('/f1', (req,res,next)=>{
    res.send('<p>Test</p>')
})
module.exports = router