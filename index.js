const express=require("express")

const userRouter=require("./routes/user")
const {ConnectMongoDB} =require('./connection')

const app=express();
const PORT =9000

// ! connect
ConnectMongoDB(`mongodb://127.0.0.1:27017/MM`)

// ! middlewares -plugin
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// ! routes
app.use("/users",userRouter)

app.listen(PORT,()=>console.log("server runing port 9000"))
