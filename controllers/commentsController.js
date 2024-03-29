import { json } from "express";
import Comment from "../models/commentSchema.js";
import Post from "../models/postSchema.js";

// Make a comment

export const makeComment = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const username = req.user.username;

  try {
    const comment = await Comment.create({ postId, username, content });

    // increment the commentsCount of the post
    await Post.findByIdAndUpdate(postId, { $inc: { commentsCount: 1 } });

    // send the comment as response
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a comment

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    await Post.findByIdAndUpdate(comment.postId, {
      $inc: { commentsCount: -1 },
    });
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// all comments

export const getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ postId: postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
