import DateExtension from '@joi/date';
import JoiImport from 'joi';

const Joi = JoiImport.extend(DateExtension) ;

export const postClientSchema = Joi.object({
    name: Joi.string().min(1).required(),
    phone: Joi.string().regex(/^\d+$/).min(10).max(11).required(),
    cpf: Joi.string().regex(/^\d+$/).min(11).max(11).required(),
    birthday: Joi.date().format('YYYY-MM-DD')
})