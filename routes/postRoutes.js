import express from 'express'
const router = express.Router()

import{ getProfileData ,getPost, getOnePost, getPublicFeed, createPost, updatePost, deletePost, reportPost} from '../controllers/PostController.js'

import { makeComment, deleteComment, getComments } from '../controllers/commentsController.js'
import { isLoggedIn } from '../controllers/middleware.js'


//route for the user profile page
router.get('/profile', isLoggedIn, getProfileData)

//getPost router
router.get('/myPosts', isLoggedIn, getPost)

//get one post router
router.get('/myPosts/:id', isLoggedIn, getOnePost)

//getPublicFeed router
router.get('/publicFeed', isLoggedIn, getPublicFeed)

//createPost router
router.post('/createPost', isLoggedIn, createPost)

//updatePost router
router.put('/updatePost/:id', isLoggedIn, updatePost)

//deletePost router
router.delete('/deletePost/:id', isLoggedIn, deletePost)

// reportPost router
router.post('/reportPost/:postId', isLoggedIn, reportPost)


// getComments router
router.get('/post/:postId/comments', isLoggedIn, getComments)
// makeComment router
router.post('/post/:postId/comment', isLoggedIn, makeComment)

// deleteComment router
router.delete('/comment/:id', isLoggedIn, deleteComment)


export default router