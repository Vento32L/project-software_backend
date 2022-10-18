const mysql = require ('mysql');
    data = require('./datosPrivados.json');
    objectConection = {
        host: data.mysql.host,
        port: data.mysql.port,
        user: data.mysql.user,
        pass: data.mysql.pass,
        database: data.mysql.database
    }

    const myConn = mysql.createConnection(objectConection)

    myConn.connect((err) => {
        if(err){
            console.log('ha ocurrido un error', err)
        }else{
            console.log('base de datos conectado')
        }
    })

    module.exports = myConn