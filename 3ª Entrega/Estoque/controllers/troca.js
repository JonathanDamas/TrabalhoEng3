const troca = require('../models/troca')

const createForm = (connection, req, res) =>{
    res.render('troca/create')
}

const createProcess = async(connection, req, res) =>{
    await troca.create(connection, req.body)
    res.redirect('/troca')
}

module.exports = {
    createForm,
    createProcess
}