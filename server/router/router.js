const express= require("express")
const { loginuser, signUp } = require("../controller/signUp")
const {fetchproducts, fetchproductByid }= require("../controller/productsController")
const addPaymentGateway = require("../controller/paymentController")
// const { fetchproducts } = require("../controller/productsController")
// const signUp }{}= require("../controller/signUp")
const router= express.Router()
router.route("/signup").post(signUp)
router.route("/login").post(loginuser)
router.route("/products").get(fetchproducts)
router.route("/product/:id").get(fetchproductByid)
router.route("/payment").post(addPaymentGateway)
module.exports= router
