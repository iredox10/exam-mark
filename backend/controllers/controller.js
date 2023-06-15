import Department from "../models/department.js"
import Director from "../models/director.js"
import ExamOfficer from "../models/examOfficer.js"

export const get_directors = async (req,res) =>{
    try {
        const directors = await Director.find()
        res.json(directors)
    } catch (err) {
        
    }
}

export const add_director = async (req,res) =>{
    try {
        const director = await Director.create(req.body)
        res.json(director)
    } catch (err) {
        res.status(201).json(err)
    }
}

export const add_department = async (req,res) =>{
    try {
        const department = await Department.create(req.body)
        const director = await Director.findById(req.params.id)
        const departments =  director.departments.push(department)
        await director.save()
        res.status(201).json({department,director})
    } catch (err) {
        res.status(201).json(err)
    }
}

export const get_departments = async(req,res)=>{
    try {
        const departments = await Director.findById(req.params.id).populate(departments)
        res.status(201).json(departments)
    } catch (err) {
        
    }
}

export const add_exam_officer = async (req,res) =>{
    try {
        const examOfficer = await ExamOfficer.create(req.body)
        const department = await Department.findById(req.params.id)
        department.examOfficers.push(examOfficer)
        await department.save()
        res.status(201).json({examOfficer,department})
    } catch (err) {
        res.json(err)
    }
}

export const get_exam_officers = async(req,res)=>{
    try {
        const examOfficers = await Department.findById(req.params.id)
        res.status(200).json(examOfficers)
    } catch (err) {
        res.json(err)
    }
}
