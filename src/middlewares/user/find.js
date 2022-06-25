const User = require("../../models/User");

module.exports.userSearch=async (req,res)=>{
    const {id}=req.body
    const user=await User.findById(id)

    if(user){
        res.send(user)
    }
    else
        res.status(400).send({success:false,msg:'Network error!!'});

}