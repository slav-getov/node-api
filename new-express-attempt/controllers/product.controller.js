const Product = require('../models/product.model.js')
//does it matter if product is capital or not - it seems that capital is recognized, lowercase is not???
const getAllProducts = async (req,res)=>{
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}

const createProduct = async (req,res)=>{
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