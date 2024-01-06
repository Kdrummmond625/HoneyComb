import 'dotenv/config.js'
import jwt from 'jsonwebtoken'
import User from '../models/userSchema.js'
import Post from '../models/postSchema.js'


//create context for middleware
const createContext = (req, res, next) => {
    // data to be accessible to all routes
    req.context = {
        models: {
            User, Post
        },
    }
    next()
}



//middleware for authorization

const isLoggedIn = async (req, res, next) => {
    try {
      // check if auth header exists
      if (req.headers.authorization) {
        // parse token from header
        const token = req.headers.authorization.split(" ")[1] //split the header and get the token
        if (token) {
          const payload = await jwt.verify(token, process.env.SECRET)
          if (payload) {
            // store user data in request object
            req.user = payload;
            next();
          } else {
            res.status(400).json({ error: "token verification failed" })
          }
        } else {
          res.status(400).json({ error: "malformed auth header" })
        }
      } else {
        res.status(400).json({ error: "No authorization header" })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  }
  export {
    isLoggedIn,
    createContext
  }