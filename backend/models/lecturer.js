import mongoose from 'mongoose'

const lecturer = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    idNumber:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    totalCreditUnit:{
        type: String,
        required: true
    },
    courses:[{
        type: mongoose.Types.ObjectId,
        ref: 'examOfficer',
    }],
    students:[{
        type: mongoose.Types.ObjectId,
        ref: 'examOfficer',
    }]
},{timestamps:true})

export default lecturer;