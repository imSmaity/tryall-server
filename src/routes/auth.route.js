const router=require('express').Router()
const { userSignin } = require('../middlewares/user/signin')
const { userSignup } = require('../middlewares/user/signup')
const { verifyEmail } = require('../middlewares/user/verify')

router.post('/signup', userSignup)
router.post('/signin', userSignin)
router.post('/verify', verifyEmail)

module.exports=router
