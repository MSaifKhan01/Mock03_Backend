const express=require("express")
const { connection } = require("./Config/db")
const { BookRouter } = require("./Routes/Book.Router")
const cors= require("cors")

const app=express()
app.use((express.json()))
app.use(cors())


app.use("/book",BookRouter
)
app.listen(3500,async()=>{
    await connection
     console.log("connected to port")
})