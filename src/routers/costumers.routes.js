import {Router} from 'express'

const costumersRouter = Router()

costumersRouter.get("/costumers")
costumersRouter.get("/costumers/:id")
costumersRouter.post("/costumers")

export default costumersRouter