const Product = require('../models/productModel');

exports.createProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        scccess : true,
        product
    })
}
exports.getAllProducts = async (req,res) => {
    const products = await Product.find();
    res.status(200).json({
        scccess : true,
        products
    });
};