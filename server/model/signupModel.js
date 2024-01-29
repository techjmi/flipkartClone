const mongoose= require("mongoose")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
const SignupSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
        max:20,
        min:3
    },
    lname:{
        type:String,
        required:true,
        trim:true,
        max:20,
        min:3
    },
    uname:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowerCase:true
    },
    phone:{
        type:Number,
        // required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})
SignupSchema.pre("save", async function(next){
    // console.log("this method", this)
    if(!this.isModified("password"))
    {
        next()
    }
    try {
        const saltRound = 10;
        const hash_password = await bcrypt.hash(this.password, saltRound);
        this.password= hash_password
        
    } catch (error) {
        next(error)
    }
})
const SignUp= mongoose.model("SignUp", SignupSchema)
module.exports =SignUp