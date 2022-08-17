const mongoose = require('mongoose')

const postCountSchamaStructure = {
    count: {
        type: Number,
        required: false
    }
}

const postCountSchema = new mongoose.Schema(postCountSchamaStructure)

const PostCount = new mongoose.model('postcount', postCountSchema)
module.exports = PostCount