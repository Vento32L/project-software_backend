const express = require ('express')
const route = require('express').Router()
const {getStudents, getOneStudent, addStudent, editStudent, deleteStudent} = require('../controllers/student.controller')

route.route('/students').get(getStudents)
route.route('/students/:stud_id').get(getOneStudent)
route.route('/students').post(addStudent)
//route.route('/estudiantes/:stud_id').put(editStudent)
//route.route('/estudiantes/:stud_id').delete(deleteStudent)

module.exports = route