const { findOne } = require("../../helpers/db_query");
const User = require("../../models/User");
const { encrypt } = require("../../services/crypto");
const { sendMail } = require("../../services/MAIL");
const { generateOTP } = require("../../services/OTP");

module.exports.userSignup=async (req,res)=>{
    const {uid,email}=req.body
    const isExisting=await findUserByEmail(email)
    const isUidExisting=await findUserById(uid)
    let newUser;

    if(isExisting){
        res.send({success:false,msg:'This email already registered'})
    }
    else if(isUidExisting){
        res.send({success:false,msg:'This username already used'})
    }
    else{
        newUser=await createUser(req.body)
        if(!newUser[0]){
            res.status(400).send({success:false,msg:'Unable to create new user'})
        }
    }
    
    res.send(newUser)
};

const findUserByEmail=async(email)=>{
    const user=await findOne({email})
    if(!user)
        return false;
    return user;
};
const findUserById=async(id)=>{
    const user=await User.findById(id)
    if(!user)
        return false;
    return user
};

const createUser=async(data)=>{
    const {uid,email,password}=data;
    const hashedPassword=await encrypt(password);
    const otpGenerated=generateOTP();

    const newUser=await User.create({
        _id:uid,
        email,
        password:hashedPassword,
        otp:otpGenerated
    });
    try{
        await sendMail({
            to:email,
            OTP:otpGenerated
        });
        return [true,newUser]
    }
    catch(error){
        return [false,'Unable to sign up, Please try again later']
    }
};