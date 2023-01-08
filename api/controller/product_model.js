const mongoose = require('mongoose')
const Product = require('../model/product');
const { param } = require('../routes/products');

//Get all products
exports.getProducts = async (req,res,next) =>{
    try{
        const products = await Product.find(); //get all documents from database
        res.status(200).json({
            msg:"All documents fetched successfully",
               data:products
        })
    } catch (err){
        res.status(501).json({
            code:0,
            msg:"Something went wrong",
            err:err
        })
    }
}

//Get single products
exports.getProductById = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.productId); //get single document from database
        let msg = ""
        if (product === null){
            msg = "No document found"
        } else {
            msg = "Single document fetched successfully"
        }
         

        res.status(200).json({
            msg:"Single document fetched successfully",
               data: product
        })
    } catch (err){
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}


//Create a product
exports.createProduct = async (req,res)=>{
    try{
        // Create a product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })
        const data = await product.save(); // calling the save method and waiting for it to return
        // If it reach this line, means save was successful
        res.status(200).json({
            msg:"Product created successfully",
               product:data
        })
    } catch (err){ //If it reaches this line, means save() failed
        res.status(200).json({
            code:0,
            msg:"Something went wrong",
            err:err
        })
    }
}

//Update a product
exports.updateProduct = async (req,res,)=>{
    try{
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body)
        // If it reach this line, means save was successful
        res.status(200).json({
            msg:"Product updated successfully",
               product:data
        })
    } catch (err){ 
        res.status(501).json({
            code:0,
            msg:"Something went wrong",
            err:err
        })
    }
}

//Delete product
exports.deleteProduct = async (req,res,)=>{
    try{
        const data = await Product.findByIdAndDelete(req.params.productId, req.body)
        // If it reach this line, means save was successful
        res.status(200).json({
            msg:"Product deleted successfully",
               product:data
        })
    } catch (err){ 
        res.status(501).json({
            code:0,
            msg:"Something went wrong while deleting",
            err:err
        })
    }
}