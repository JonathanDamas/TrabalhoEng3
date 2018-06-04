const express = require('express')
const trocaController = require('../controllers/troca')

const trocaRouter = ({connection}) =>{
    const router = express.Router()

    router.get('/',trocaController.createForm.bind(null, connection))
    router.post('/',trocaController.createProcess.bind(null, connection))

    return router

}

module.exports = trocaRouter