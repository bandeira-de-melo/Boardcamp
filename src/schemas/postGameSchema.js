import Joi from "joi";

const postGameSchema = Joi.object({
    name: Joi.string().min(2).required(),
    image: Joi.string().uri().required(),
    stockTotal: Joi.number().required(),
    pricePerDay: Joi.number().required()
})

export default postGameSchema