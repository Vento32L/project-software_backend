const express = require ('express')
const route = require('express').Router()
const {getGrades, getOneGrade, addGrade} = require('../controllers/grade.controller')

route.route('/grades').get(getGrades)
route.route('/grades/:grad_id').get(getOneGrade)
route.route('/grades').post(addGrade)

module.exports = route