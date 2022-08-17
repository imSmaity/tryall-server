const User = require("../models/UserModel")


module.exports.findOne = async (data) => {
    return await User.findOne(data)
}
module.exports.findByIdAndUpdate = async (id, data) => {
    return await User.findByIdAndUpdate(id, data)
}