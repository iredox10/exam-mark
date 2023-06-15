import mongoose from 'mongoose'

const ConnectMongo = async () =>{
    try {
        const connect = await mongoose.connect('mongodb://localhost/exam-mark')
        console.log('mongo connected')
    } catch (err) {
        console.log(err)
    }
}

export default ConnectMongo