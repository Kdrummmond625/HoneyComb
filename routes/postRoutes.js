import express from 'express'
const router = express.Router()

import{ getPost, createPost, updatePost, deletePost } from '../controllers/PostController.js'

//getPost router
router.get('/', getPost)

//createPost router
router.post('/createPost', createPost)

//updatePost router
router.put('/updatePost/:id', updatePost)

//deltePost router
router.delete('/deletePost/:id', deletePost)

export default router