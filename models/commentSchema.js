import mongoose from "mongoose";

const commentSchema = mongoose.Schema( {
    postId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    username: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }

}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment