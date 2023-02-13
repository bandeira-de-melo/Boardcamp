import {Router} from 'express'
import { getGamesList } from '../controllers/getGamesController.js'
import { postGameController } from '../controllers/postGameController.js'
import { validatePostGameSchema } from '../middlewares/validatePostGameSchema.js'


const gamesRouter = Router()

gamesRouter.get("/games", getGamesList)
gamesRouter.post("/games", validatePostGameSchema, postGameController)

export default gamesRouter