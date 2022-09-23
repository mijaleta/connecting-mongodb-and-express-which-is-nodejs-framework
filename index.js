const express=require('express')
const mongoose = require('mongoose')
const app =express()
mongoose.connect('mongodb://localhost:27017/latestdb',{ 
    useNewUrlParser:true,useUnifiedTopology:true
},(error)=>{
    if(error){
        console.log("please  check there is an error")
    }
    else{
        console.log("succefully connected ")
    }
})
app.listen(3000,()=>{
    console.log("application is runnig on port 3000...")
})