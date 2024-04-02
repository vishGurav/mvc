const {User}=require("../models/users")
const mongoose =require("mongoose")

let getusers = async (req,res)=>
{

    const dbusers=await User.find({});
    res.json(dbusers);
}

let getsingleUser = async (req,res)=>
{
    const user= await User.findById(req.params.id);
    console.log(user);
    
    if(!user) return res.status(400).json({error:" user not found .?"})

    return res.json(user);

}

let adduser = async (req,res)=>{
     
    let body=req.body

    console.log(body);

    if(! body || !body.f_nm || !body.l_nm ||!body.email || ! body.job_title || !body.gender)
    {
        return res.status(400).json({"msg":"all field are required..?"})
    }
     const result= await User.create({
            f_nm:body.f_nm,
            l_nm:body.l_nm,
            email:body.email,
            job_title:body.job_title,
            gender:body.gender
         })
         console.log(result);
    return res.status(201).json({"msg":"successfuly...!"})
}

let updateuser= async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{l_nm :"sutar"})
    res.json({msg:"successfully update..!"})
}

let deleteuser =  async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({msg:"user deleted successfully..!"})
}

module.exports ={getusers, getsingleUser ,adduser,updateuser,deleteuser}