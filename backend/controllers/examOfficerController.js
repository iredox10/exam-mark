import Course from "../models/course.js"
import ExamOfficer from "../models/examOfficer.js"
import Semester from "../models/semester.js"
import Session from "../models/session.js"

export const add_session = async (req,res)=>{
    try {
        const session = await Session.create(req.body)
        const examOfficer = await ExamOfficer.findById(req.params.id)
        examOfficer.sessions.push(session)
        examOfficer.save()
        res.status(201).json({session,examOfficer})
    } catch (err) {
        res.json(err)
    }
}
export const add_semester = async (req,res)=>{
    try {
        const semester = await Semester.create(req.body)
        const session = await Session.findById(req.params.id)
        session.semesters.push(semester)
        session.save()
        res.status(201).json({session})
    } catch (err) {
        res.json(err)
    }
}

export const add_course = async (req,res)=>{
    try {
        const course = await Course.create(req.body)
        const semester = await Semester.findById(req.params.id)
        semester.courses.push(course)
        semester.save()
        res.status(201).json({semester})
    } catch (err) {
        res.json(err)
    }
}
