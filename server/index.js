require("dotenv").config() 
const express= require("express")
const app= express()
const mongoDB = require("./data/db")
const defaultData = require("./default")
const Router= require("./router/router")
//cors policy 
const cors= require("cors")
const corsOption={
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT ,PATCH, DELETE, HEAD",
    // crendetials:true
    credentials: true 
}
app.use(cors(corsOption))  

app.use(express.json());
const PORT=process.env.PORT||8000
app.get("/", (req,res)=>{
    res.send("This is my home page backend")
})
app.use("/api", Router)
mongoDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`the server is running at port no ${PORT}`)
    })
})
// defaultData()  