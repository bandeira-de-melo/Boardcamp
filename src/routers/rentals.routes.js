import {Router} from 'express'
import { postRentalController } from '../controllers/postRentalController.js'
import { validatePostRetal } from '../middlewares/validatePostRetal.js'

const retalsRouter = Router()

retalsRouter.get("/rentals") 
retalsRouter.post("/rentals", validatePostRetal, postRentalController)

export default retalsRouter