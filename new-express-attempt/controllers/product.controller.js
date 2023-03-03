const Product = require('../models/product.model.js')

const getAllProducts = async (req,res)=>{
    try {
        //res.send('<p>All products...</p>');
        const products = await Product.findAll();
        res.send(JSON.stringify(products, null, '<pre>'));
    } catch (err) {
        console.log(err);
    }
}
const getProductById = async (req,res)=>{
    console.log(req.params)
    try {
        const productBasedOnId = await Product.findAll({
            where: {
              id: req.params.productId
            }
          })
        console.log(productBasedOnId + 'is now')
        const result = productBasedOnId && productBasedOnId.length ? JSON.stringify(productBasedOnId, null, '<pre>') : '<p>empty</p>'
        res.send(result)
    } catch (error) {
        console.log(err)
    }
}
const createProduct = async (req,res)=>{
    console.log('in create')
    const title = req.body.title
    const description = req.body.description
    
    console.log(title, description)
    try {
        await Product.create({
            title: title,
            description: description
        });
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getAllProducts, createProduct, getProductById}