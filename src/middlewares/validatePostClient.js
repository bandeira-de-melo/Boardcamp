import { db } from "../database.js"
import { postClientSchema } from "../schemas/postClientSchema.js"


export const validatePostClient = async (req, res, next) => {
    const data ={
        name: req.body.name,
        phone: req.body.phone,
        cpf: req.body.cpf,
        birthday: Date.parse(req.body.birthday) 
    }
    console.log(typeof data.phone)

    const {error, value} =  postClientSchema.validate(data, {abortEarly: false})
    
    if(error) return res.status(400).send(error.details.map(detail => detail.message))
    
    try {
        const result = await db.query(`SELECT COUNT(*)FROM customers WHERE cpf = $1`, [data.cpf]) 
        
        const occurrencies = parseInt(result.rows[0].count)
        
        if(occurrencies > 0) return res.status(409)
        .send("Not able to register. There is already a customer with this cpf.")
        
        res.locals.customer = value
    
        next()
    } catch (error) {
        res.status(500).send(error)
    }
  
}    
