import mongoose from 'mongoose'

const course = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    code:{
        type: String,
        required: true,
        unique: true
    },
    creditUnit:{
        type: Number,
        required: true
    },
},{timestamps:true})

const Course = mongoose.model('course', course)
export default Course