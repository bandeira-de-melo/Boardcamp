import {Router} from 'express'
import { getGamesList } from '../controllers/getGamesController.js'
import { validatePostGameSchema } from '../middlewares/validatePostGameSchema.js'
import postGameSchema from '../schemas/postGameSchema.js'

const gamesRouter = Router()

gamesRouter.get("/games", getGamesList)
gamesRouter.post("/games", validatePostGameSchema)

export default gamesRouter