import express from "express";
import * as controller from '../controllers/examOfficerController.js'
const route = express.Router()

route.post('/add-session/:id', controller.add_session)

route.post('/add-semester/:id', controller.add_semester)

route.post('/add-course/:id', controller.add_course)

export default route