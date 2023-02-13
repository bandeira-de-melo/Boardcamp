import Joi from 'joi'

export const postClientSchema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.number().min(11).max(11).required(),
    cpf: Joi.number().min(11).max(11).required(),
    birthday: Joi.alphanum().min(10).max(10).required()
})