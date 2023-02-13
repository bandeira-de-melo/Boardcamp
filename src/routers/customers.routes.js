import {Router} from 'express'
import { postClientController } from '../controllers/postClientController.js'
import { validatePostClient } from '../middlewares/validatePostClient.js'

const customersRouter = Router()

customersRouter.get("/customers")
customersRouter.put("/customers/:id")
customersRouter.post("/customers", validatePostClient, postClientController)

export default customersRouter