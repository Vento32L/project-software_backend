const dbconnection = require('../../database/dbconnection')

var dataModels ={
    getGrades: (callback) => {
        if(dbconnection) {
            let sql = `select * from grade`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    getOneGrade: (data, callback) => {
        console.log("el id : ", data)
        if(dbconnection) {
            let sql = `select * from grade where grad_id = ${dbconnection.escape(data)}`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addGrade : (data, callback) => {
        if(dbconnection) {
            let sql = `insert into grade (grad_name, grad_status) values (${dbconnection.escape(data.grad_name)}, 
            ${dbconnection.escape(data.grad_name)}, 
            ${dbconnection.escape(data.grad_status)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'embedded course'})
            })
        }
    },
}

module.exports = dataModels