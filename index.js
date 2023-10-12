const express=require("express")
const app=express()
const cors=require("cors")
const { connection } = require("./db")
const { productRouter } = require("./route/product.route")
app.use(cors())
app.use(express.json())
app.use("/",productRouter)
require("dotenv").config()
const port=process.env.port
app.listen(port,async()=>{
    try {
        await connection
        console.log("connected to database")
        console.log("server is running at port:",port)
    } catch (error) {
        console.log("error connected to database")
        console.log(error)
    }
})