const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        created_on: { type: Date, default: Date.now }
    }
)

const postModel = mongoose.model('second', postSchema)


module.exports = postModel