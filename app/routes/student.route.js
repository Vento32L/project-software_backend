const express = require ('express')
const route = require('express').Router()
const {getStudents, getOneStudent, addStudent, editStudent, deleteStudent} = require('../controllers/student.controller')

route.route('/estudiantes').get(getStudents)
route.route('/estudiantes/:stud_id').get(getOneStudent)
route.route('/estudiantes').post(addStudent)
route.route('/estudiantes/:stud_id').put(editStudent)
route.route('/estudiantes/:stud_id').delete(deleteStudent)

module.exports = route