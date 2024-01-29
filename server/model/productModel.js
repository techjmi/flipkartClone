const mongoose=require("mongoose")
const productSchema= new mongoose.Schema({
  id:{
    type:String,
    require:true,
    unique:true
  },
  url:String,
  detailUrl:String,
  title:Object,
  price:Object,
  quantity:Number,
  description:String,
  tagline:String,
  Discount:String
})
//Create collection
const Product= mongoose.model("Product", productSchema)
module.exports= Product