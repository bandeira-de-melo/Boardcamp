import {Router} from 'express'
import { getCustomersList } from '../controllers/getCustomersController.js'
import { postClientController } from '../controllers/postClientController.js'
import { putCustomerController } from '../controllers/putCustomerController.js'
import { validatePostClient } from '../middlewares/validatePostClient.js'
import { validatePutCustomer } from '../middlewares/validatePutCustomer.js'

const customersRouter = Router()

customersRouter.get("/customers", getCustomersList)
customersRouter.put("/customers/:id", validatePutCustomer, putCustomerController)
customersRouter.post("/customers", validatePostClient, postClientController)

export default customersRouter