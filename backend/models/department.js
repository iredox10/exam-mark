import mongoose from 'mongoose'

const department = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        unique: true
    },
    shortName:{
        type: String,
        required: true,
        unique: true

    },
    examOfficers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'examOfficer0',
    }]
},{timestamps:true})

const Department = mongoose.model('department', department)
export default Department;