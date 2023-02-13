import {db} from '../database.js'
export async function getRentalsList(req, res){
    try {
        const rentalsList = await db.query('SELECT * FROM rentals')
        res.send(rentalsList.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}