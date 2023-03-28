import  connection  from "./app.js"

export const indexRoute =async  (req, res)=> {
    const [result] = await connection.query('SELECT * FROM tusena.users;')
    res.json(result[0])
 }