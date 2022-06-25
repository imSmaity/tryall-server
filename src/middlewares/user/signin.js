const { compare } = require("bcrypt");
const User = require("../../models/User");


module.exports.userSignin=async (req,res)=>{
    const {findId,password}=req.body
    const emailExisting=await findUserByEmail(findId)
    const usernameExisting=await findUserById(findId)
    const user=emailExisting || usernameExisting

    if(user){
        if(await compare(password,user.password))
            res.send(user)
        else
            res.status(400).send({success:false,msg:'Wrong email or password.'});
    }
    else
        res.status(400).send({success:false,msg:'Wrong username or email.'});

}

const findUserByEmail=async(email)=>{
    const user=await User.findOne({
        email:email
    })
    if(user)
        return user;
    return false;
};
const findUserById=async(id)=>{
    const user=await User.findById(id)
    if(user)
        return user;
    return false;
};