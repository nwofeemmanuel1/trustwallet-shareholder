const express=require("express")
const app=express()

app.use("/",express.static("html"))

const port=process.env.PORT||3000
app.listen(port,()=>console.log(`app running on port: ${port}`))