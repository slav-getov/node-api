const Product = require('../models/product.model.js')

const getAllProducts = async (req,res)=>{
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
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

module.exports = getAllProducts
module.exports = createProduct