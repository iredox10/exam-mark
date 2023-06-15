import mongoose from 'mongoose'

const semester = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    totalCreditUnit:{
        type: Number,
        required: true
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
    }],
    students:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
    }]
},{timestamps:true})

const Semester = mongoose.model('semester', semester)
export default Semester