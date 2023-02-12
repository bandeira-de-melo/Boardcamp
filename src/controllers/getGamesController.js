import {db} from '../database.js'
export async function getGamesList(req, res){
    try {
        const gamesList = await db.query('SELECT * FROM games')
        res.send(gamesList.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}