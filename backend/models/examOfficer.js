import mongoose from 'mongoose'

const examOfficer = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    idNumber:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    sessions:[{
        type: mongoose.Types.ObjectId,
        ref: 'session',
    }],
},{timestamps:true})

const ExamOfficer = mongoose.model('examOfficer', examOfficer)

export default ExamOfficer