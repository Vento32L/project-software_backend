const dataModels = require('../models/student.model')
//const dbconnection = require('../../database/dbconnection')

function getStudents(req, res){
    dataModels.getStudents((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneStudent(req, res){
    console.log("id : ", req.params)
    const { stud_id } = req.params
    dataModels.getOneStudent(stud_id, (data, error) => {
        res.json(data)
    })
}

function addStudent(req, res){
    const {stud_name, stud_lastname, stud_address, stud_phone, stud_contact_info, stud_gender} =  req.body
    console.log(`student : ${stud_name}, ${stud_lastname}, ${stud_address}, ${stud_phone}, ${stud_contact_info}, ${stud_gender}`)
    dataModels.addStudent({student_name, stud_lastname, stud_address, stud_phone, stud_contact_info, stud_gender}, (data, error) => {
        res.json(data)
    })
}

function editStudent(req, res) {
    const { stud_id } = req.params
    const { stud_name, stud_lastname, stud_address, stud_phone, stud_contact_info, stud_gender } = req.body
    dataModels.editStudent({stud_id, stud_name, stud_lastname, stud_address, stud_phone, stud_contact_info, stud_gender }, (data, error) => {
        res.json(data)
    })
}

function deleteStudent(req, res){
    const { stud_id } = req.params
    dataModels.deleteStudent(stud_id, (data, error) => {
        res.json(data)
    })
}

module.exports={
    getStudents,
    getOneStudent,
    addStudent,
    editStudent,
    deleteStudent
}