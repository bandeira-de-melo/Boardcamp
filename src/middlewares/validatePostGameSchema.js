import { db } from "../database.js"
import postGameSchema from "../schemas/postGameSchema.js"


export const validatePostGameSchema = async (req, res, next) => {
    const {name, image, stockTotal, pricePerDay} = req.body
    
    const data = {
        name : name,
        image: image,
        stockTotal: stockTotal,
        pricePerDay: pricePerDay
    }

    const {error, value} =  postGameSchema.validate(data, {abortEarly: false})
    
    
    if(error) return res.status(400).send(error.details.map(detail => detail.message))
    
    try {
        const result = await db.query(`SELECT COUNT(*)FROM games WHERE name = $1`, [name]) 
        
        const occurrencies = parseInt(result.rows[0].count)
        
        if(occurrencies > 0) return res.status(409)
        .send("Not able to register. There is already a game with the same name.")
        
        res.locals.game = value
    
        next()
    } catch (error) {
        res.status(500).send(error)
    }
  
}    
