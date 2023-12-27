import mongoose from "mongoose";

const postSchema = mongoose.Schema( {
    title: {type: String, required: true},
    // category: {type: String, required: true, enum:['I Want to Vent', ' I Want to Heal, I Won']},
    content: {type: String, required: true}
})

const Post = mongoose.model('Post', postSchema)

export default Post