import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import customersRouter from './routers/customers.routes.js'
import gamesRouter from './routers/games.routes.js'
import retalsRouter from './routers/rentals.routes.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

//routes
app.use([customersRouter, gamesRouter, retalsRouter])


app.listen(5000, ()=>{
    console.log('Server listening on PORT 5000')
})
