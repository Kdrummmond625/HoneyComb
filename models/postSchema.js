import mongoose from "mongoose";

const postSchema = mongoose.Schema( {
    username: {type: String, required: true},
    title: {type: String, required: true},
    category: {
        type: String,
        required: true,
        enum: ['I Want To Vent', ' I Want To Heal', 'I Won']
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    content: {type: String, required: true},
    commentsCount: {type: Number, required: true, default: 0}
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)

export default Post