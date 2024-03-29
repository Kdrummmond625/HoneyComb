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
    },
    likes: {
        count: { type: Number, default: 0 },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    }

}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment