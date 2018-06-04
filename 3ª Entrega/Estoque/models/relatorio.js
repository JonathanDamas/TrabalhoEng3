const findAll = (connection) =>{
    return new Promise((resolve, reject) =>{
        connection.query('select * from equipamentos', (err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

const deleteOne = (connection, id) =>{
    return new Promise((resolve, reject) =>{
        connection.query('delete from equipamentos where id = '+id+' limit 1', (err) =>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    deleteOne
}