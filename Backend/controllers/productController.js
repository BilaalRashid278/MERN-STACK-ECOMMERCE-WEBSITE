const productModel = require('../models/productModel');

exports.createProduct = async (req, res, next) => {
    const product = await productModel.create(req.body);
    res.status(201).json({
        scccess: true,
        product
    })
}
exports.getAllProducts = async (req, res) => {
    const products = await productModel.find();
    res.status(200).json({
        scccess: true,
        products
    });
};

// Get Single Product Details

exports.getProductDetails = async (req, res,next) =>{
    const product = await productModel.findOne({_id : req.params.id});
    if(!product){
        res.status(500).json({
            success : false,
            message : 'Product not found'
        });
    }else{
        res.status(200).json({
            success : true,
            product
        });
    }
};

// Update Product --Admin

exports.updateProduct = async (req, res,next) => {
    let product = await productModel.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found'
        })
    }
    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product
    })
};


// Delete Product

exports.deleteProduct = async (req,res,next) => {
    const product = await productModel.findOneAndDelete({_id : req.params.id});
    if(!product){
        res.status(500).json({
            success : false,
            message : 'Product not found'
        });
    }else{
        res.status(200).json({
            success : true,
            message : 'Product deleted successfully',
        });
    }
}; 