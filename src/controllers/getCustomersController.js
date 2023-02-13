import {db} from '../database.js'
export async function getCustomersList(req, res){
    try {
        const customersList = await db.query('SELECT * FROM customers')
        res.send(customersList.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}