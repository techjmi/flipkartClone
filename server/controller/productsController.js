const Product =require( "../model/productModel")
// const Product = require("../model/signupModel");

const fetchproducts=async(req, res)=>{
    try {
        // const products= await Product.find()
        // console.log(products)
        const products = await Product.find().sort({ order: 1 });
        res.status(200).json(products)
    } catch (error) {
        console.log("The Error in fetching the products is", error.message)
    }
}

const fetchproductByid= async(req,res)=>{
    try {
        const id= req.params.id
        const product= await Product.findOne({id:id})
        res.status(200).json(product)
        console.log(product)
        
    } catch (error) {
        console.log("The Error Fetching the data by Id is ", error.message)
    }
}
module.exports= {fetchproducts, fetchproductByid}