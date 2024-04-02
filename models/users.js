const mongoose=require("mongoose")

const userSchema=mongoose.Schema(
    {
        f_nm:{type :String,required:true},
        l_nm:{ type:String ,required:true},
        email:{type:String,required:true,unique:true},
        job_title:{type:String},
        gender:{type:String}
    }

)

// ! schema model
const User= mongoose.model('user',userSchema)


module.exports={User}