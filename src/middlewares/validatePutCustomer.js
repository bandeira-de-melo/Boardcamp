import { db } from "../database.js"
import { postClientSchema } from "../schemas/postClientSchema.js"


export const validatePutCustomer = async (req, res, next) => {
    const id = parseInt(req.params.id)
    console.log(typeof id)

    const data ={
        name: req.body.name,
        phone: req.body.phone,
        cpf: req.body.cpf,
        birthday: Date.parse(req.body.birthday) 
    }

    const {error, value} =  postClientSchema.validate(data, {abortEarly: false})
    if(error) return res.status(400).send(error.details.map(detail => detail.message))
    
    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id = $1`, [id])
        if(customer.rows.length === 0) return res.status(404).send("No custumers found with the provided id.")
        
        
        const otherCustomerCpf = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [data.cpf])
        console.log(otherCustomerCpf.rows)
        otherCustomerCpf.rows.map(cust => {
            if(cust.id !== id) return res.status(409).send("There is already a customer with this same cpf.")
        })

        res.sendStatus(200)
    } catch (error) {
        res.send(500).send(error)
    }
    
    res.locals.customer = value
    

    next()
}  