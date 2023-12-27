import { json } from "express";
import Post from "../models/postSchema.js";

const getPost = async(req, res) => {
    Post.find({}).then((findPosts) => {
        res.json(findPosts)
    })
}

const createPost = async(req, res) => {
    const newPost = req.body
    Post.create(req.body).then ((newPost) => {
        res.json(newPost)
    })
}

const updatePost = async(req, res) => {
    const id = req.params.id
    const updateData = req.body
    Post.findByIdAndUpdate(id, updateData, {new: true}).then((updatePost) => {
        res.json(updatePost)
    })
}

const deletePost = async(req, res) => {
    const id = req.params.id
    Post.findByIdAndDelete(id).then((deletePost) => {
        res.json(deletePost)
    })
}


export {
    getPost,
    createPost,
    updatePost,
    deletePost
}