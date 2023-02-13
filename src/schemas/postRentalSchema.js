import DateExtension from '@joi/date';
import JoiImport from 'joi';

const Joi = JoiImport.extend(DateExtension) ;

export const postRentalSchema = Joi.object({
    customerId: Joi.number().required(),
    gameId: Joi.number().required(),
    daysRented: Joi.number().min(1).required()  
})