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
    // if(Number(req.params) == 'NaN'){
    //     res.send('<p>no such id</p>')
    // }
    try {
        const productsBasedOnId = await Product.findAll({
            where: {
              id: req.params.productId
            }
          })
        //console.log(productBasedOnId + 'is now')
        const result = productsBasedOnId[0] && productsBasedOnId.length ? JSON.stringify(productsBasedOnId[0], null, '<pre>') : '<p>empty</p>'
        res.send(result)
    } catch (error) {
        res.send('<p>No such id bro</p>')
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

const updateProductBasedOn = async (req,res) =>{
    const{id, field, newValue} = req.params
    
    const updateData = {"title": newValue}
    //updateData[field] = newValue
    console.log(id,field,newValue)
    console.log(updateData)
    
    try {
        const resultProd = await Product.update({updateData}, {
            where: {
                id: req.params.id
            }
        })
        console.log('end')
        res.send(resultProd)
    } catch (error) {
        res.send('<p>Error during update</p>')
    }

}
module.exports = {getAllProducts, createProduct, getProductById, updateProductBasedOn}