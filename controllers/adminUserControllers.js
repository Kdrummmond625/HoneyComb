import e, { json } from 'express'
import User from '../models/userSchema.js'

//get all users
export const getUsers = async (req, res) =>  {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.error('Error in getUsers', error)
        res.status(500).json({ message: 'Error fetching users'})
    }
}

// Delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error in deleteUser', error)
        res.status(500).json({ message: 'Error deleting user'})
    }
}


// Suspend or unsuspend user

export const suspendUser = async (req, res) => {
    try {
        const { userID } = req.params;
        const user = await User.findById(userID)
        user.suspened = !user.suspended;
        await user.save();
        res.status(200).json({ message: `User ${user.suspended ? 'unsuspended' : 'suspended'}`});
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
}

