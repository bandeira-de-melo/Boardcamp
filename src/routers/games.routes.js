import {Router} from 'express'
import { getGamesList } from '../controllers/getGamesController.js'

const gamesRouter = Router()

gamesRouter.get("/games", getGamesList)
gamesRouter.post("/games")

export default gamesRouter