import { json } from "express";
import Post from "../models/postSchema.js";
import router from "../routes/userRouter.js";
import { isLoggedIn } from "./middleware.js";

const getPost = async (req, res) => {
    
    const { username } = req.user; // get username from req.user property

    Post.find({ username }) // find posts by this username
        .then((findPosts) => {
            res.json(findPosts); // send the found posts as response
        })
        .catch((error) => {
            res.status(400).json({ error: error.message }); // send error response if any
        });
};

const getOnePost = async (req, res) => {

    const { username } = req.user; // get username from req.user property

    Post.findOne({ username, _id: req.params.id }) // find a post by this username and post ID
        .then((foundPost) => {
            if (!foundPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(foundPost); // send the found post as response
        })
        .catch((error) => {
            res.status(400).json({ error: error.message }); // send error response if any
        });
}


const createPost = async (req, res) => {
    
    const { username } = req.user; // get username from req.user property
    req.body.username = username; // set username in req.body

    Post.create(req.body) // create a new post with the request body
        .then((createdPost) => {
            res.json(createdPost); // send the created post as response
        })
        .catch((error) => {
            res.status(400).json({ error: error.message }); // send error response if any
        });
};


const updatePost = async(req, res) => {
    const { username } = req.user // get username from req.user property
    const id = req.params.id // get the post ID from the request parameter
    const updateData = req.body // data to update
    updateData.username = username // set username in update data

    Post.findByIdAndUpdate(id, updateData, { new: true}) //update the post
        .then((updatedPost) => {
            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found'})
            }
            res.json(updatedPost) // send the updated post as response
        })
        .catch((error) => {
            res.status(400).json({ error: error.message}) // send error response if any
        })
}

const deletePost = async(req, res) => {
    const { username } = req.user
    const id = req.params.id
    Post.findByIdAndDelete(id).then((deletePost) => {
        res.json(deletePost)
    })
}


export {
    getPost,
    getOnePost,
    createPost,
    updatePost,
    deletePost
}