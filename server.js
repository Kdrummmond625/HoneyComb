//import database
import 'dotenv/config.js'
import './config/database.js'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { log } from 'mercedlogger'
import { createContext } from './controllers/middleware.js'
import session from 'express-session'

// import routes
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRouter.js'



const app = express()
const PORT = process.env.PORT || 4000
 

// middleware

app.use(express.json())
app.use(cors()) // add cors header
app.use(morgan("tiny"))
app.use (createContext) // create req.context
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true}
// }))


app.use('/honeycomb/home', postRoutes)
app.use('/honeycomb/user', userRoutes)

// port server is listening on
app.listen(PORT, function() {
    console.log(`Your listening on localhost:${PORT}`)
})
