const pedido = require('../models/pedido')

const createForm = (connection, req, res) =>{
    res.render('pedido/create')
}

const createProcess = async(connection, req, res) =>{
    await pedido.create(connection, req.body)
    res.redirect('/pedido')
}

module.exports = {
    createForm,
    createProcess
}