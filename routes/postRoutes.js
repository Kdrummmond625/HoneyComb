import express from 'express'
const router = express.Router()

import{ getPost, getOnePost, createPost, updatePost, deletePost} from '../controllers/PostController.js'
import { isLoggedIn } from '../controllers/middleware.js'

//route for the user profile page
// router.get('/profile', isLoggedIn, getProfile)

//getPost router
router.get('/myPosts', isLoggedIn, getPost)

//get one post router
router.get('/myPosts/:id', isLoggedIn, getOnePost)

//createPost router
router.post('/createPost', isLoggedIn, createPost)

//updatePost router
router.put('/updatePost/:id', isLoggedIn, updatePost)

//deltePost router
router.delete('/deletePost/:id', isLoggedIn, deletePost)

export default router