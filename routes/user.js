const express=require("express")
 const router= express.Router();

 const { getusers,getsingleUser,adduser,updateuser,deleteuser} =require("../controllers/users")


router.get("/",getusers)

router.get("/:id", getsingleUser)

router.post('/',adduser )

router.patch("/:id",updateuser )

router.delete('/:id',deleteuser)


module.exports = router;