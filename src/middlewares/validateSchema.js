

const validateSchema= (schema, data) => (
    (req, res, next)=>{

        const {error, value} = schema.validate(data, {abortEarly: false})

        if(error) res.status(422).send(error)

        res.locals.data = value

        next()
    }
)