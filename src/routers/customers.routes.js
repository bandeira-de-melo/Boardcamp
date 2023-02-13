import {Router} from 'express'
import { getCustomerById } from '../controllers/getCustomersByIdController.js'
import { getCustomersList } from '../controllers/getCustomersController.js'
import { postClientController } from '../controllers/postClientController.js'
import { putCustomerController } from '../controllers/putCustomerController.js'
import { validatePostClient } from '../middlewares/validatePostClient.js'
import { validatePutCustomer } from '../middlewares/validatePutCustomer.js'

const customersRouter = Router()

customersRouter.get("/customers", getCustomersList)
customersRouter.get("/customers/id", getCustomerById)
customersRouter.put("/customers/:id", validatePutCustomer, putCustomerController)
customersRouter.post("/customers", validatePostClient, postClientController)

export default customersRouter