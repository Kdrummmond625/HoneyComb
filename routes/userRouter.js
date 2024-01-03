import express from "express";
const router = express.Router()

const { SECRET = 'secret'} = process.env

import { getUsers, userSignup, userLogedin ,deleteUser } from "../controllers/UserController.js";


// get all users
router.get('/all', getUsers)


// signup user
router.post('/signup', userSignup)

//Log user in 
router.post('/login', userLogedin)

//create new user
// router.post('/signup', createNewUser)

// //update user info
// router.put('/updateUser/:id', updateUser)

// delete user 
router.delete('/deleteUser/:id', deleteUser)





export default router

