const create = (connection, data) => {
    return new Promise((resolve, reject) =>{
        connection.query(`insert into pedidos (nome, endereço, rg, cpf, telefone, produto) values ('${data.nome}', '${data.endereço}', '${data.rg}', '${data.cpf}', '${data.telefone}', '${data.produto}')`, (err) =>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

module.exports = {
    create
}