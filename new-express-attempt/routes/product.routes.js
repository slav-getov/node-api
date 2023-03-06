const express = require('express')

const router = express.Router()
const { productValidationRules, validate } = require('../field-validators/product.validator.js')
const {getAllProducts, createProduct, getProductById, updateProductBasedOn, deleteProductById} = require('../controllers/product.controller.js')
const verifyAuth = require('../helpers/verifyAuth.js')


router.get('/all',getAllProducts)
// router.get('/f1', verifyAuth,(req,res,next)=>{
//     res.send('<p>Test</p>')
// })
router.get('/:productId', getProductById)


router.put('/update-:id', updateProductBasedOn)
router.post('/', verifyAuth, productValidationRules(), validate, createProduct)

router.delete('/delete-:id', deleteProductById)

module.exports = router