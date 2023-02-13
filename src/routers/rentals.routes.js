import {Router} from 'express'
import { getRentalsList } from '../controllers/getRentalsController.js'
import { postRentalController } from '../controllers/postRentalController.js'
import { validatePostRetal } from '../middlewares/validatePostRetal.js'

const retalsRouter = Router()

retalsRouter.get("/rentals", getRentalsList) 
retalsRouter.post("/rentals", validatePostRetal, postRentalController)

export default retalsRouter