// const { products } = require("./constant/data")
const products = require("./constant/data")
const Product = require("./model/productModel")

const defaultData= async()=>{
    try {
        await Product.insertMany(products)
        console.log("Data Insert sucessfully")
    } catch (error) {
        console.log('the error in inserting the Data is ', error.message)
    }
}
module.exports= defaultData
// export default  defaultData 