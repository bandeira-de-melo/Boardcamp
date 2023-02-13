import Joi from "joi";

const postGameSchema = Joi.object({
    name: Joi.string().min(2).required(),
    image: Joi.string().uri().required(),
    stockTotal: Joi.number().min(0).required(),
    pricePerDay: Joi.number().min(0).required()
})

export default postGameSchema