import {db} from '../database.js'
export async function getCustomerById(req, res){
    const id = parseInt(req.params.id)
    try {
        const customer = await db.query('SELECT * FROM customers WHERE id=$1', [id])
        res.send(customer.rows[0])
    } catch (error) {
        res.status(500).send(error.message)
    }
}