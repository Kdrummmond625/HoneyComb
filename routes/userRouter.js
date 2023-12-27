import express from "express";
const router = express.Router()


import { getUsers, createNewUser, updateUser, deleteUser } from "../controllers/UserController.js";


// get all users
router.get('/all', getUsers)

//create new user
router.post('/signup', createNewUser)

//update user info
router.put('/updateUser/:id', updateUser)

// delete user 
router.delete('/deleteUser/:id', deleteUser)





export default router



// //User registration
// router.post('/register', register)

// //User login
// router.post('/login', login)

// //User logout
// router.get('/logout', logout)

// //Get user profile
// router.get('/:userId', getUserProfile)

// // Update user profile
// router.put('/:userId', updateUserProfile)

// //delete user
// router.delete('/:userId', deleteUser)

// //change password
// router.put('/:userId/changePassword', changePassword)