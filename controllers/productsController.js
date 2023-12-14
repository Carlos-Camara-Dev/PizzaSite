const Op = require('sequelize');
const products = require('../model/products');

const getProducts = async (req, res)=>{
    const result = await products.findAll();
    return res.status(200).json(result);
}
const registerProduct = async (req, res)=>{
    const product_name = req.body.product_name;
    const product_description = req.body.product_description;
    const product_image = req.body.product_image;
    const product_owner = req.body.product_owner;
    const product_price = req.body.product_price;
    if(!product_name||!product_description || !product_image || !product_owner || !product_price) return res.status(400).json("Some data is empty")
    const productResult = await products.create({
    product_name,
    product_description,
    product_image,
    product_owner,
    product_price
}); 
    console.log(productResult)
    return res.json(productResult);
}


const deleteProduct = async (req, res)=>{
    const productFound = await products.findByPk(req.body.id) 
    if(!productFound) return res.status(400).json('Product not found')
    await products.destroy({where: {id: req.body.id}})
    return res.status(200).json(`User ${productFound.product_name} Deleted`);
}

const getProduct = async (req, res)=>{
    // if req.params._id is favicon.ico then response immediately
    if (req.params.id === "favicon.ico") {
        return res.status(404)
    }
    const productFound = await products.findByPk(req.params.id)
    if(!productFound) return res.status(400).json('Product not found')
    return res.status(200).json(productFound)
}
module.exports = {getProducts, registerProduct, deleteProduct, getProduct}