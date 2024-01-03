import express from 'express'
const router = express.Router()

import{ getPost, createPost, updatePost, deletePost } from '../controllers/PostController.js'
import { isLoggedIn } from '../controllers/middleware.js'

//getPost router
router.get('/myPosts', isLoggedIn, getPost)

//createPost router
router.post('/createPost', isLoggedIn, createPost)

//updatePost router
router.put('/updatePost/:id', isLoggedIn, updatePost)

//deltePost router
router.delete('/deletePost/:id', isLoggedIn, deletePost)

export default router