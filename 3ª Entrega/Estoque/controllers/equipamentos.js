const equipamentos = require('../models/equipamentos')

const createForm = (connection,req, res) =>{
    res.render('equipamento/create')
}

const createProcess = async(connection, req, res) =>{
    await equipamentos.create(connection, req.body)
    res.redirect('/equipamento')
}

const updateForm = async(connection,req, res) =>{
    const lista = await equipamentos.findById(connection, req.params.id)
    res.render('equipamento/update', { lista })
}

const updateProcess = async(connection, req, res) =>{
    await equipamentos.update(connection, req.params.id, req.body)
    res.redirect('/equipamento')
}

module.exports = {
    createForm,
    createProcess,
    updateForm,
    updateProcess
}