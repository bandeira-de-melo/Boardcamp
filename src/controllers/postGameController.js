import { db } from "../database.js"

export const postGameController = async (req, res) =>{
    const {name, image, stockTotal, pricePerDay} = res.locals.game
    try {
        await db.query(`
        INSERT INTO games (name, image, "stockTotal", "pricePerDay")
        VALUES ($1, $2, $3, $4)`,[name, image, stockTotal, pricePerDay])

        res.status(201).send(`The game was registered successfully!`)
    } catch (error) {
        res.status(500).send(error.message)
    }
}