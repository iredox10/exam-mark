import mongoose from 'mongoose'

const Semester = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    regNumber:{
        type: String,
        required: true
    },
    totalCreditUnit:{
        type: String,
        required: true
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
    }],
    password:{
        type: String,
        required: true
    }
},{timestamps:true})

export default Semester;