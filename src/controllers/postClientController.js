import { db } from "../database.js"

export const postClientController = async (req, res) =>{
    const {name, phone, cpf, birthday} = res.locals.customer
    try {
        await db.query(`
        INSERT INTO customers (name, phone, cpf, birthday)
        VALUES ($1, $2, $3, $4)`,[name, phone, cpf, birthday])

        res.status(201).send(`The customer was registered successfully!`)
    } catch (error) {
        res.status(500).send(error.message)
    }

}