import dayjs from "dayjs"
import { db } from "../database.js"

import { postRentalSchema } from "../schemas/postRentalSchema.js"



export const validatePostRetal = async (req, res, next) => {
    const {customerId, gameId, daysRented} = req.body
    
    const data = {
        customerId : parseInt(customerId),
        gameId: parseInt(gameId),
        daysRented: parseInt(daysRented),
    }

    const {error, value} =  postRentalSchema.validate(data, {abortEarly: false})
    
    if(error) return res.status(400).send(error.details.map(detail => detail.message))
    
    try {
        const isCustomer = await db.query(`SELECT * FROM customers WHERE id=$1`,[value.customerId])
        console.log(isCustomer)
        const customerCount = parseInt(isCustomer.rows[0].count)
        if(customerCount < 1) return res.status(400)

        const isGame = await db.query(`SELECT * FROM games WHERE id=$1`,[value.gameId])
        const gameCount = parseInt(isGame.rows[0].count)
        if(gameCount < 1) return res.status(400)

        const newRental = {
            customerId: value.customerId,
            gameId: value.gameId,
            rentDate: dayjs().format('YYYY-MM-DD'),    // data em que o aluguel foi feito
            daysRented: value.daysRented,             // por quantos dias o cliente agendou o aluguel
            returnDate: null,          // data que o cliente devolveu o jogo (null enquanto não devolvido)
            originalPrice: value.daysRented  * isGame.rows[0].pricePerDay,       // preço total do aluguel em centavos (dias alugados vezes o preço por dia do jogo)
            delayFee: null   
        }
        res.locals.rental = newRental
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error)
    }
    
  next()
}    
