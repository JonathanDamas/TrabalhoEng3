const create = (connection, data) =>{
    return new Promise((resolve, reject) =>{
        connection.query(`insert into equipamentos (fabricante, modelo, veiculo, quantidade) values ('${data.fabricante}', '${data.modelo}', '${data.veiculo}', '${data.quantidade}')`, (err)=>{
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