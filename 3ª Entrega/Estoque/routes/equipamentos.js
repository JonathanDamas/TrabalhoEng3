const express = require('express')
const equipamentosController = require('../controllers/equipamentos')

const equipamentosRouter = ({connection}) =>{
    const router = express.Router()

    router.get('/',equipamentosController.createForm.bind(null, connection))
    router.post('/',equipamentosController.createProcess.bind(null, connection))

    return router
}

module.exports = equipamentosRouter