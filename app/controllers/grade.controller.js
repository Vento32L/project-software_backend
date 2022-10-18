const dataModels = require('../models/grade.model')
const dbconnection = require('../../database/dbconnection')

function getGrades(req, res){
    dataModels.getGrades((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneGrade(req, res){
    console.log("id : ", req.params)
    const { grad_id } = req.params
    dataModels.getOneGrade(grad_id, (data, error) => {
        res.json(data)
    })
}

function addGrade(req, res){
    const {grad_name, grad_status} =  req.body
    console.log(`grade : ${grad_name}, ${grad_status}`)
    dataModels.addGrade({grad_name, grad_status}, (data, error) => {
        res.json(data)
    })
}

function editGrade(req, res) {
    const { grad_id } = req.params
    const { grad_name, grad_status } = req.body
    dataModels.editGrade({grad_id, grad_name, grad_status}, (data, error) => {
        res.json(data)
    })
}

function deleteGrade(req, res){
    const { grad_id } = req.params
    dataModels.deleteGrade(grad_id, (data, error) => {
        res.json(data)
    })
}

module.exports={
    getGrades,
    getOneGrade,
    addGrade,
    editGrade,
    deleteGrade
}