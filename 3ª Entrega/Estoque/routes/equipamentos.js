const express = require('express')
const equipamentosController = require('../controllers/equipamentos')

const equipamentosRouter = ({connection}) =>{
    const router = express.Router()

    router.get('/',equipamentosController.createForm.bind(null, connection))
    router.post('/',equipamentosController.createProcess.bind(null, connection))
    router.get('/update/:id',equipamentosController.updateForm.bind(null, connection))
    router.post('/update/:id',equipamentosController.updateProcess.bind(null, connection))

    return router
}

module.exports = equipamentosRouter