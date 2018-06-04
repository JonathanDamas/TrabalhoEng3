const express = require('express')
const relatorioController = require('../controllers/relatorio')

const relatorioRouter = ({connection}) =>{
    const router = express.Router()

    router.get('/',relatorioController.index.bind(null,connection)) 
    router.get('/delete/:id',relatorioController.deleteOne.bind(null,connection))
    
    return router
}

module.exports = relatorioRouter