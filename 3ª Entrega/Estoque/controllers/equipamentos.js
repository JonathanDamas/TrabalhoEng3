const equipamentos = require('../models/equipamentos')

const createForm = (connection,req, res) =>{
    res.render('equipamento/create')
}

const createProcess = async(connection, req, res) =>{
    await equipamentos.create(connection, req.body)
    res.redirect('/equipamento')
}

module.exports = {
    createForm,
    createProcess
}