import mongoose from 'mongoose'

const session = new mongoose.Schema({
    year:{
        type: String,
        required: true
    },
    semesters:[{
        type: mongoose.Types.ObjectId,
        ref: 'semesters',
    }],
},{timestamps:true})

const Session = mongoose.model('session', session)

export default Session