import {connection} from './db.js'

export const getuser = async (req, res)=>{
    try {
    const [result]= await connection.query('SELECT * FROM users')
        // res.status(200).json({result:"funciona el get"})
    res.json(result)

    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }
}

export const posuser = async (req, res)=>{
    try {
        const {name,tipo,linea} = req.body //configurar el body del json a enviar
        // insertar los datos mediante JSON
        const [rows] = await connection.query('INSERT INTO users (name, tipo, linea) VALUES (?,?,?)', [name, tipo, linea ])
        res.send({ // muestra los datos ingresados como resultado del envio JSON
        id: rows.insertId,
        name,
        tipo,
        linea
        
    })
    } catch (error) {
        return res.status(500).json({
            message: 'not found',error
            })
    }
}

export const createuser= async (req,res)=>{

    const {name,tipo,linea} = req.body //configurar el body del json a enviar

    try {
        const [rows] = await connection.create({
           name,
           linea,
           tipo
        })
        res.send({ // muestra los datos ingresados como resultado del envio JSON
            id: rows.insertId,
            name,
            tipo,
            linea
            
        })
    } catch (error) {
        return res.status(500).json({
            message: 'not found',
            })
    }
}

// console.log(connection);