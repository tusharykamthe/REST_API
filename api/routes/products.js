 const express=require('express')
 const router =express.Router()
 const mongoose = require('mongoose')

 const Product = require('../model/product')
const productController = require('../controller/product_model') //Import the controller



router.get('/', productController.getProducts
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"Get Product"
//     })
// }
)

//Code for product POST request
router.post('/', productController.createProduct
// (req,res,next)=>{
    
    // const product={
    //     name:req.body.name,
    //     price:req.body.price
    // }
    // res.status(200).json({
    //     msg:"Post Product",
    //     create:"Product created successfully",
    //     product:product
    // })

    //Build a const, by using the product model
    // const product = new Product({
    //        _id: new mongoose.Types.ObjectId(),
    //        name: req.body.name,
    //        price: req.body.price
    
    //     })
//Connect to the database
        //   connect()
        //Save the const (product) to the database
//        product.save().then((res)=>{
//               console.log(res)
//               res.status(200).json({
//               create:"Product created successfully",
//               product:product
//             })
//        }).catch((err)=>{
//           console.log(err)
//        })    
// }
)



// router.get('/:productId',(req,res,next)=>{
//     res.status(200).json({
//         msg:"Single Product"
//     })
// })




router.get('/:productId',productController.getProductById
// (req,res,next)=>{
//     const id=req.params.productId

//     if(id=="8"){
//         res.status(200).json({
//             msg:"Wow"
//         })
//     }
//     else{
//         res.status(200).json({
//             msg:"Sorry"
//         })
//     }
    
// }
)

router.put('/:productId', productController.updateProduct

// (req,res,next)=>{
//     const id=req.params.productId

//     res.status(200).json({
//         msg:"Put Product",
//         id:id
//     })  
// }
)


router.delete('/:productId', productController.deleteProduct
// (req,res,next)=>{
//     const id=req.params.productId

//     res.status(200).json({
//         msg:"Delete Product",
//         id:id
//     })
    
// }
)

module.exports=router