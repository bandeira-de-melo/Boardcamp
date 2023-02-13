import { db } from "../database.js"

export const putCustomerController = async (req, res) =>{
    const id = parseInt(req.params.id)
    const {name, phone, cpf, birthday} = res.locals.customer
    try {
        await db.query(`
        UPDATE customers 
        SET name = $1, phone = $2, cpf = $3, birthday = $4 
        WHERE id = $5`,
        [name, phone, cpf, birthday, id])

        res.status(201)
    } catch (error) {
        res.status(500).send(error)
    }

}