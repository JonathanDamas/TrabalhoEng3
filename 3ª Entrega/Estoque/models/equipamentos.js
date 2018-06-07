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

const update = (connection,id, data) =>{
    return new Promise((resolve, reject) =>{
        connection.query(`update equipamentos set fabricante='${data.fabricante}', modelo='${data.modelo}', veiculo='${data.veiculo}', quantidade='${data.quantidade}' where id=${id}`, (err)=>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}


module.exports = {
    create,
    findById,
    update
}