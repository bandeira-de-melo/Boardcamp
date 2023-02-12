import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import costumersRouter from './routers/costumers.routes.js'
import gamesRouter from './routers/games.routes.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

//routes
app.use([costumersRouter, gamesRouter])


app.listen(5000, ()=>{
    console.log('Server listening on PORT 5000')
})
