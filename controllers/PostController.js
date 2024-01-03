import { json } from "express";
import Post from "../models/postSchema.js";
import router from "../routes/userRouter.js";
import { isLoggedIn } from "./middleware.js";


const getProfileData = async (req, res) => {
    try {
        // Extract the username from the request object, assuming it's set by your authentication middleware
        const { username } = req.user;

        // Fetch the most recent 5 posts made by the user, sorted by creation time (newest first)
        // const recentPosts = await Post.find({ username }).limit(5).sort({ createdAt: -1 });

        // Aggregate the number of posts in each category for this user
        // This MongoDB aggregation operation groups posts by category and counts them
        const categoryCounts = await Post.aggregate([
            { $match: { username: username } }, // Filter to only include posts by this user
            { $group: { _id: "$category", count: { $sum: 1 } } } // Group by category and count
        ]);

        // Structure the data to send as the response
        // This includes the username, recent posts, and counts of posts by category
        const profileData = {
            username: username,
            // recentPosts: recentPosts,
            postCountsByCategory: categoryCounts,
            // You can add more data here as needed
        };

        // Send the structured data as a JSON response
        res.json(profileData);
    } catch (error) {
        // If an error occurs, send a 500 server error response with the error message
        res.status(500).json({ error: error.message });
    }
};

// function to getPost
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

//logic for public feed
const getPublicFeed = async (req, res) => {
    try {
        //fetch only public post
        const publicPosts = await Post.find({ isPublic: true }).sort({ createdAt: -1 });
        res.json(publicPosts);
    } catch (error){
        res.status(500).json({ error: error.message });
    }
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
    getProfileData,
    getPost,
    getOnePost,
    getPublicFeed,
    createPost,
    updatePost,
    deletePost
}