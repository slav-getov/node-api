const express = require('express')

const router = express.Router()
const { userValidationRules, validate } = require('../field-validators/product.validator.js')
const {getAllProducts, createProduct, getProductById, updateProductBasedOn, deleteProductById} = require('../controllers/product.controller.js')



router.get('/all',getAllProducts)
router.get('/:productId', getProductById)
router.get('/f1', (req,res,next)=>{
    res.send('<p>Test</p>')
})

router.put('/update-:id', updateProductBasedOn)
router.post('/',userValidationRules(), validate, createProduct)
router.delete('/delete-:id', deleteProductById)

module.exports = router