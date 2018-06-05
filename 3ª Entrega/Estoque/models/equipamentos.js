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

const findById = (connection, id) =>{
    return new Promise((resolve, reject) =>{
        connection.query('select * from equipamentos where id = '+id, (err,results)=>{
            if(err){
                reject(err)
            }else{
                if(results.length > 0){
                    resolve(results[0])
                }else{
                    resolve({})
                }
            }
        })
    })
}

module.exports = {
    create,
    findById
}