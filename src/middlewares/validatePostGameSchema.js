import postGameSchema from "../schemas/postGameSchema.js"


export const validatePostGameSchema= (req, res, next) => {
    const {name, image, stockTotal, pricePerDay} = req.body

    const data = {
        name,
        image,
        stockTotal: Number(stockTotal),
        pricePerDay: Number(pricePerDay)
    }

    const {error, value} =  postGameSchema.validate(data, {abortEarly: false})

    if(error) res.status(422).send(error.details.map(detail => detail.message))

    res.locals.data = value

    next()
}    
