const create = (connection, data) =>{
    return new Promise((resolve, reject) =>{
        connection.query(`insert into trocas (data, nome_cliente, modelo_veiculo, ano_veiculo, placa_veiculo, atividade) values ('${data.data}', '${data.cliente}', '${data.modelo}', '${data.ano}', '${data.placa}', '${data.atividade}')`, (err) =>{
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