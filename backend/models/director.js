import mongoose from 'mongoose'

const director = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    idNumber:{
        type: String,
        required: true,
        unique: true
    },
    school:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    departments:[{
        type: mongoose.Types.ObjectId,
        ref: 'Department',
    }],
    
},{timestamps:true})

const Director = mongoose.model('director', director)
export default Director;