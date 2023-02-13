import {Router} from 'express'
import { validatePostRetal } from '../middlewares/validatePostRetal.js'

const retalsRouter = Router()

retalsRouter.get("/rentals") 
retalsRouter.post("/rentals", validatePostRetal)

export default retalsRouter