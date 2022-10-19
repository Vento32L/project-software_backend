const dbconnection = require('../../database/dbconnection')

var dataModels = {
    getStudents: (callback) => {
        if(dbconnection) {
            let sql = `select * from student`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneStudent: (data, callback) => {
        console.log("el id : ", data)
        if(dbconnection) {
            let sql = `select * from student where stud_id = ${dbconnection.escape(data)}`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addStudent: (data, callback) => {

        if(dbconnection) {
            let sql = `insert into student (stud_name, stud_lastname, stud_address, stud_phone, stud_contact_info, stud_gender) values (
            ${dbconnection.escape(data.stud_name)},
            ${dbconnection.escape(data.stud_lastname)}, 
            ${dbconnection.escape(data.stud_address)}, 
            ${dbconnection.escape(data.stud_phone)}, 
            ${dbconnection.escape(data.stud_contact_info)}, 
            ${dbconnection.escape(data.stud_gender)})`
              
            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'Estudiante creado satisfactoriamente'})
            })
        }
    },

    editStudent : (data, callback) => {
        if(dbconnection) {
            let sql = `update student set stud_name = ${dbconnection.escape(data.stud_name)}, 
                stud_lastname = ${dbconnection.escape(data.stud_lastname)},
                stud_address = ${dbconnection.escape(data.stud_address)},
                stud_phone = ${dbconnection.escape(data.stud_phone)},
                stud_contact_info = ${dbconnection.escape(data.stud_contact_info)},
                stud_gender = ${dbconnection.escape(data.stud_gener)} where 
                stud_id = ${dbconnection.escape(data.stud_id)}`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'Estudiante actualizado'})
            })
        }
    },

    deleteStudent : (data, callback) => {
        if(dbconnection) {
            let sql = `delete from student where student_id = ${dbconnection.escape(data)}`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'Estudiante eliminado'})
            })
        }
    }

    
}

module.exports = dataModels