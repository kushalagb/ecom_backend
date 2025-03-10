const express = require('express')
const connectDB=require("./config/db")
//import express from 'express'
const cors=require('cors')

const app=express() 
const allowedOrigins=["ecom-frontend-fojs-h75rhw1ht-kushalagbs-projects.vercel.app","https://ecom-frontend-fojs.vercel.app/"]

//middlewares
app.use(express.json())
app.use(cors(
    {
        origin: function (origin, callback) {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
        credentials: true, // Allows cookies and authentication headers if needed
      }
))

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



