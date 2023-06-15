import express from "express";
import * as controller from '../controllers/controller.js'
const route = express.Router()

route.get('/', controller.get_directors)

route.get('/get-exam-officers/:id', controller.get_exam_officers)

route.post('/add-director', controller.add_director)

route.get('/get-departments/:id', controller.get_departments)
route.post('/add-department/:id', controller.add_department)

route.post('/add-exam-officer/:id', controller.add_exam_officer)


export default route