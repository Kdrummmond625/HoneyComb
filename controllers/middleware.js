import "dotenv/config.js";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import Post from "../models/postSchema.js";

//create context for middleware
const createContext = (req, res, next) => {
  // data to be accessible to all routes
  req.context = {
    models: {
      User,
      Post,
    },
  };
  next();
};

//middleware for authorization

// const isLoggedIn = async (req, res, next) => {
//   try {
//     // check if auth header exists
//     if (req.headers.authorization) {
//       // parse token from header
//       const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
//       if (token) {
//         const payload = await jwt.verify(token, process.env.SECRET);
//         if (payload) {
//           // store user data in request object
//           req.user = payload;
//           next();
//         } else {
//           res.status(400).json({ error: "token verification failed" });
//         }
//       } else {
//         res.status(400).json({ error: "malformed auth header" });
//       }
//     } else {
//       res.status(400).json({ error: "No authorization header" });
//     }
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };

const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "No authorization header" });
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    console.log(user)
    if (err) {
      return res.status(403).json({ error: "Token verification failed", details: err.message });
    }
    // Attach the decoded user to the request
    req.user = user;
    next();
  });
};


const isAdmin = (req, res, next) => {
  console.log(req.user)
  console.log(req.user.roles)
  try {
    // Assuming req.user.roles is an array and it's populated correctly.
    if (req.user && req.user.roles && req.user.roles.includes("admin")) {
      next(); // Proceed to the next middleware if user is an admin
    } else {
      // If the user is not an admin, or if the roles array doesn't include 'admin', send a forbidden response.
      return res.status(403).json({ error: "Access denied. Admin only route" });
    }
  } catch (error) {
    // Log the error to the console for debugging purposes.
    console.error("isAdmin middleware error:", error);

    // Return a more informative error message, including the error message from the catch block.
    return res.status(500).json({ 
      error: "Error checking admin status", 
      details: error.message // Assuming the error object has a 'message' property.
    });
  }
};


export { 
  isLoggedIn, 
  createContext, 
  isAdmin 
};
