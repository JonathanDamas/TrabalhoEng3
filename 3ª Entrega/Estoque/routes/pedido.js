const express = require('express')
const pedidoController = require('../controllers/pedido')

const pedidoRouter = ({connection}) =>{
    const router = express.Router()

    router.get('/',pedidoController.createForm.bind(null, connection))
    router.post('/',pedidoController.createProcess.bind(null, connection))

    return router
}

module.exports = pedidoRouter