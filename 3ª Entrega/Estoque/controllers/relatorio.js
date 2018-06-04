const relatorio = require('../models/relatorio')

const index = async(connection, req, res) => {
    const results = await relatorio.findAll(connection)
    res.render('relatorio/index', { relatorio: results })
}

const deleteOne = async(connection, req , res) =>{
    await relatorio.deleteOne(connection,req.params.id)
    res.redirect('/relatorio')
}

module.exports = {
    index,
    deleteOne
}