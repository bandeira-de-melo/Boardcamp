import { db } from "../database.js"

export const postRentalController = async (req, res) =>{
    const {
        customerId, 
        gameId, 
        rentDate, 
        daysRented, 
        returnDate, 
        originalPrice, 
        delayFee} = res.locals.rental

    try {
        await db.query(`
        INSERT INTO rentals 
        ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee])

        res.status(201)
    } catch (error) {
        res.status(500).send(error)
    }

}