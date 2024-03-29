import { json } from "express";
import Comment from "../models/commentSchema.js";
import Post from "../models/postSchema.js";

export const likeComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id;

    try {
        const comment = await Comment.findById(commentId)
        if (!comment.likes.users.includes(userId)) {
            comment.likes.count += 1;
            comment.likes.users.push(userId);
            await comment.save();
            res.status(200).json({ message: 'Comment liked successfully' });
        } else {
            res.status(400).json({ message: 'User has already liked this comment'})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const unlikeComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id;

    try {
        const comment = await Comment.findById(commentId);
        if (comment.likes.users.includes(userId)) {
            comment.likes.count -= 1;
            comment.likes.users = comment.likes.users.filter(user => !user.equals(userId));
            await comment.save();
            res.status(200).json({ message: 'Comment unliked successfully' });
        } else {
            res.status(400).json({ message: 'User has not liked this comment' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const likePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.user._id;

    try {
        const post = await Post.findById(postId);
        if (!post.likes.users.includes(userId)) {
            post.likes.count += 1;
            post.likes.users.push(userId);
            await post.save();
            res.status(200).json({ message: 'Post liked successfully' });
        } else {
            res.status(400).json({ message: 'User has already liked this post' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const unlikePost =  async (req, res) => {
    const { postId } = req.params;
    const userId = req.user._id;

    try {
        const post = await Post.findById(postId);
        if (post.likes.users.includes(userId)) {
            post.likes.count -= 1;
            post.likes.users = post.likes.users.filter(user => !user.equals(userId));
            await post.save();
            res.status(200).json({ message: 'Post unliked successfully' });
        } else {
            res.status(400).json({ message: 'User has not liked this post.'});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}