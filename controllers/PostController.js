import { json } from "express";
import Post from "../models/postSchema.js";
import Report from "../models/reportSchema.js";
import router from "../routes/userRouter.js";
import { isLoggedIn } from "./middleware.js";


const getProfileData = async (req, res) => {
    try {
        // Extract the username from the request object, assuming it's set by your authentication middleware
        const { username } = req.user;

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
            postCountsByCategory: categoryCounts,
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
    try {
        const username = req.user.username
        const findPosts = await Post.find({ username }).sort({ createdAt: -1 });
        
        const categoryCounts = await Post.aggregate([
            { $match: { isPublic: true}},
            { $group: { _id: "$category", count: { $sum: 1}}}
        ])

        const responseData = {
            posts: findPosts,
            counts: categoryCounts
        }
        res.json(responseData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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

        // Get counts of posts by category
        const categoryCounts = await Post.aggregate([
            { $match: { isPublic: true}},
            { $group: { _id: "$category", count: { $sum: 1}}}
        ])

        // Combine the posts and category counts into a single object
        const responseData = {
            posts: publicPosts,
            counts: categoryCounts
        }
        res.json(responseData);

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

//delete post

const deletePost = async(req, res) => {
    const { username } = req.user
    const id = req.params.id
    Post.findByIdAndDelete(id).then((deletePost) => {
        res.json(deletePost)
    })
}

const reportPost = async(req, res) => {
    console.log(req.user)
    const { postId } = req.params
    const { reason, details } = req.body
    if (!req.user || !req.user._id) {
        return res.status(403).json({ message: "User not authenticated" });
    }
    const reportedBy = req.user._id;

    try { 
        const newReport = new Report({
            reportedBy,
            reportedItem: postId,
            reportedItemType: 'Post',
            reason,
            details,
        })

        await newReport.save();
        res.status(201).json({ message: 'Post reported successfully' });
    } catch (error) {
        console.error('Error submitting report', error);
        res.status(500).json({ message: "Error submitting report", details: error.message})
    }
}

//export functions
export {
    getProfileData,
    getPost,
    getOnePost,
    getPublicFeed,
    createPost,
    updatePost,
    deletePost,
    reportPost
}