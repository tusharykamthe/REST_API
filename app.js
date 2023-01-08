require('dotenv').config()


const express=require('express')
const app=express()

//morgan
const morgan=require('morgan')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')

//Connect to Mongo Database (Deployed on mongo atlas cloud service)
// const connectionString="process.env.ConnnectionString"

const username = process.env.dbuser
const password = process.env.dbpassword
// console.log(connectionString)
const connectionString = "mongodb+srv://" + username +":"+password + "@cluster0.7huwmbe.mongodb.net/test"
//mongodb+srv://fbsroot:<password>@cluster0.7huwmbe.mongodb.net/test
//mongodb+srv://fbsroot:<password>@cluster0.7huwmbe.mongodb.net/test
//mongodb+srv://fbsroot:<password>@cluster0.7huwmbe.mongodb.net/test
mongoose.connect(connectionString)

// app.use((req,res,next)=>{
//    res.status(200).json({
//     msg:"This is a simple get request"
//    }) 
// })

const productRouter=require('./api/routes/products')
const orderRouter=require('./api/routes/order')

//Setup the body-parser middleware to handle encoded urls and json data
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use(morgan("dev"))//dev is one of the predefined formats for the morgan
app.use('/products',productRouter)
app.use('/order',orderRouter)
module.exports = app