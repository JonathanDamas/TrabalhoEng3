const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql')

const bodyParser = require('body-parser')

const connection = mysql.createConnection ({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database:'estoque'
})

const dependencies = {
    connection
}

const relatorio = require('./routes/relatorio')
const equipamento = require('./routes/equipamentos')
const pedido = require('./routes/pedido')
const troca = require('./routes/troca')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req,res) => res.render('home'))
app.use('/relatorio', relatorio(dependencies))
app.use('/equipamento', equipamento(dependencies))
app.use('/pedido',pedido(dependencies))
app.use('/troca',troca(dependencies))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

connection.connect(() =>{
    app.listen(port, ()=>console.log('Server listening on port: '+port))
})