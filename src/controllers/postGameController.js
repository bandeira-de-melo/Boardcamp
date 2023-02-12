import { db } from "../database.js"

export const postGameController = async (req, res) =>{
    const {name, image, stockTotal, pricePerDay} = res.locals.data
    try {
        const result = 
        db.query(`
        INSERT INTO games (name, image, stockTotal, pricePerDay)
        VALUES ($1, $2, $3, $4)`,[name, image, stockTotal, pricePerDay])

        console.log(result)

        res.status(201).send(`${name} was registered successfully!`)
    } catch (error) {
        res.status(500).send(error.message)
    }
}