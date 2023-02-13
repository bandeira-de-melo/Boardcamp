import postGameSchema from "../schemas/postGameSchema.js"


export const validatePostGameSchema= (req, res, next) => {
    const {name, image} = req.body
    const stockTotal = req.body.stockTotal
    const pricePerDay = req.body.pricePerDay
    
    const data = {
        name : name,
        image: image,
        stockTotal: stockTotal,
        pricePerDay: pricePerDay
    }

    console.log(typeof data.stockTotal)

    const {error, value} =  postGameSchema.validate(data, {abortEarly: false})
    
    
    if(error) return res.status(422).send(error.details.map(detail => detail.message))
    
    res.locals.game = value

    next()
}    
