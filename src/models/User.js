const mongoose=require('mongoose')

const userSchamaStructure={
    _id:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    created:{
        type: String,
        default: new Date().toISOString()
    },
    password:{
        type: String,
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        default: false
    }
}

const userSchema=new mongoose.Schema(userSchamaStructure)

const User=new mongoose.model('user',userSchema)
module.exports=User