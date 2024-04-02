const mongoose=require("mongoose")

const ConnectMongoDB = async (url)=> mongoose.connect(url)
     

 
module.exports ={ConnectMongoDB}
