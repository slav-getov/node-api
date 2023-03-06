const Product = require('../models/product.model.js')
const { body, validationResult } = require('express-validator');

const getAllProducts = async (req,res)=>{
    try {
        
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        console.log(err);
    }
}
const getProductById = async (req,res)=>{
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
        res.send('<p>No such product with such id</p>')
    }
}
const createProduct = async (req,res)=>{
    console.log('in create')
    const title = req.body.title
    const description = req.body.description
    try {
        await Product.create({
            title: title,
            description: description
        });
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        res.setStatus(404).send('<p>Product could not be created</p>')
    }
}

const updateProductBasedOn = async (req,res) =>{
    const{id} = req.params
    
    try {
        const resultProd = await Product.update(req.body, {
            where: {
                id: id
            }
        })
        console.log('end')
        res.send(resultProd)
    } catch (error) {
        console.log(error)
        res.send('<p>Error during update</p>')
    }

}

const deleteProductById = async (req,res) =>{
    const {id} = req.params
    const productsBasedOnId = await Product.findAll({
        where: {
          id: id
        }
    })
    console.log('product is' + productsBasedOnId)
    if(productsBasedOnId){
        res.status(404).send('<p>No such product exists so cannot delete!</p>')
    }

    try {
        const deleted = await Product.destroy({where:{id:id}})
        console.log(deleted)
        .then(result=>res.send(`Item with id ${id} was deleted from the db!`))
    } catch (error) {
        res.send('<p>Error during deletion</p>')
    }
}
module.exports = {getAllProducts, createProduct, getProductById, updateProductBasedOn, deleteProductById}