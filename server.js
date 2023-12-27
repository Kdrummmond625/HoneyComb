//import database
import 'dotenv/config.js'
import './config/database.js'

import express from 'express'
import cors from 'cors'

// import routes
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRouter.js'



const app = express()
const PORT = process.env.PORT || 4000
 

// middleware

app.use(express.json())
app.use(cors())

app.use('/honeycomb/posts', postRoutes)
app.use('/honeycomb/users', userRoutes)

// port server is listening on
app.listen(PORT, function() {
    console.log(`Your listening on localhost:${PORT}`)
})
