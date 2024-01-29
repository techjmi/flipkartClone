
const SignUp = require("../model/signupModel");
const bcrypt=require("bcryptjs")

const signUp = async (req, res) => {
    try {
        const { fname, lname, email, phone, password, uname } = req.body;
        const existUser = await SignUp.findOne({ email });

        if (existUser) {
            // Send a response and return to avoid further execution
            return res.status(400).json("User Already Exists");
        }

        const userCreated = await SignUp.create({
            fname, lname, email, phone, password, uname
        });

        console.log(userCreated);

        // Send a success response
        res.status(201).json("User Created Successfully");
    } catch (error) {
        console.log("The Error in creating the user is", error.message);
        // Send an error response
        res.status(500).json("Internal Server Error");
    }
};
//login logic
const loginuser= async(req, res)=>{
    try {
        const{email,password}= req.body
        const userExist= await SignUp.findOne({email})
        if(!userExist){
            res.status(400).json({"message":"Invalid Credentail"})
        }
        const user= await bcrypt.compare(password, userExist.password)
        if(user){
            res.status(200).json({data:userExist})
        }

    } catch (error) {
        console.log("the error during login is ", error.message)
    }
}

module.exports = {signUp, loginuser};
