import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes.js'
import examOfficerRoute from './routes/examOfficerRoutes.js'
import mongoose from 'mongoose'
import ConnectMongo from './utils/connectMongo.js'



const app = express()
ConnectMongo()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(routes)
app.use(examOfficerRoute)


app.listen(3001, () => console.log('connected to server'))
