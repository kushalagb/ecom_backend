const express = require('express')
const connectDB=require("./config/db")
//import express from 'express'
const cors=require('cors')

const app=express() 

//middlewares
app.use(express.json())
app.use(cors())

connectDB()
app.use("/auth",require("./routes/authRoutes"))
app.use("/cart",require("./routes/cartRoutes"))

//getting the server
app.get('/',(req,res)=>{
    res.send('getting the server') 
})
const port=5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})



