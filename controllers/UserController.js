import { json } from "express";
import User from '../models/userSchema.js'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const SECRET = process.env.SECRET;



const getUsers = async (req, res) =>  {
   try {
    const findUsers = await User.find({})
    res.json(findUsers)
   } catch (error) {
    console.error('Error in getUsers', error)
    res.status(500).json({ message: 'Error fetching users'})
   }
}

const userSignup = async (req, res) => {
   try {
      const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
      
      req.body.password = await bcrypt.hash(req.body.password, 10)
      //create user
      const user = await User.create(req.body)
      res.json(user)
   } catch (error) {
      res.status(400).json({ message: 'Error with user signup', error: error.message });
        console.log(error);
   }
}



const userLogedin = async (req, res) => {
   try {
      const user = await User.findOne({ username: req.body.username })  
      if (user) {
         const result = await bcrypt.compare(req.body.password, user.password)
         if (result) {
            const token = jwt.sign({ username: user.username }, SECRET)
            console.log(token)
            return res.json({ token })
         } else {
            res.status(400).json({ message: 'Incorrect password' })  
         }
      } else {
         res.status(404).json({ message: 'User not found' })  
      }
   } catch (error) {
      console.error('Error in userLogedin', error)
      res.status(500).json({ message: 'Error processing login request' })  
   }
}


//  const createNewUser = async (req, res) => {
//    try {
//     const newUser = await User.create(req.body)
//     res.json(newUser)
//    } catch (error) {
//     console.log('Error in createNewUser', error)
//     res.status(500).json({ message: 'Error creating new user'})
//    }
//  }

//  const updateUser = async (req, res) => {
//     try {
//        const updatedData = req.body
//        const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true })
//        res.json(updatedUser)
//     } catch (error) {
//         console.error('Error in updateUser:', error)
//         res.status(500).json({ message: 'Error updating user' })
//     }
//  }

 const deleteUser = async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id)
      res.json(deletedUser)  
    } catch (error) {
        console.error('Error in deleteUser', error)
        res.status(500).json({ message: 'Error deleting user'})
    }
 }

 export {
    getUsers,
    userSignup,
    userLogedin,
    deleteUser
 }