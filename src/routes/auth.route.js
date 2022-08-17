const router=require('express').Router()
const { userSearch } = require('../middlewares/user/find')
const { userSignin } = require('../middlewares/user/signin')
const { userSignup } = require('../middlewares/user/signup')
const { userUpdate } = require('../middlewares/user/update')
const { verifyEmail } = require('../middlewares/user/verify')

router.post('/signup', userSignup)
router.post('/signin', userSignin)
router.post('/verify', verifyEmail)
router.post('/find_user', userSearch)
router.put('/update', userUpdate)

module.exports=router
