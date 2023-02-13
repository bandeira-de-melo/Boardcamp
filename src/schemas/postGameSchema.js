import Joi from "joi";

const postGameSchema = Joi.object({
    name: Joi.string().min(1).required(),
    image: Joi.string().uri().required(),
    stockTotal: Joi.number().min(1).required(),
    pricePerDay: Joi.number().min(1).required()
})

export default postGameSchema