import { Router} from 'express'
// importar los controladores realizados para cada ruta
import { createuser, getuser, posuser } from './controller_user.js'
import cors  from 'cors'

const router = Router()

router.get('/', cors(), getuser)

// crear la ruta para paserle el paramentro ID
router.get('/user/:id',getuser )

router.post('/users', posuser)

router.post('/createuser', createuser)

// router.patch('/employee/:id', UpdateEmployee)

// Agregar este codigo a cada uta del BAckend
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});

    export default router