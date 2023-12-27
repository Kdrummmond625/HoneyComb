import { json } from "express";
import User from '../models/userSchema.js'


const getUsers = async (req, res) =>  {
   try {
    const findUsers = await User.find({})
    res.json(findUsers)
   } catch (error) {
    console.error('Error in getUsers', error)
    res.status(500).json({ message: 'Error fetching users'})
   }
}

 const createNewUser = async (req, res) => {
   try {
    const newUser = await User.create(req.body)
    res.json(newUser)
   } catch (error) {
    console.log('Error in createNewUser', error)
    res.status(500).json({ message: 'Error creating new user'})
   }
 }

 const updateUser = async (req, res) => {
    try {
       const updatedData = req.body
       const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true })
       res.json(updatedUser)
    } catch (error) {
        console.error('Error in updateUser:', error)
        res.status(500).json({ message: 'Error updating user' })
    }
 }

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
    createNewUser,
    updateUser,
    deleteUser
 }