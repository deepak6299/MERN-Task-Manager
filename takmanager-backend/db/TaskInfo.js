const mongoose=require("mongoose")



const taskSchema=new mongoose.Schema({
   
    title:String,
    description:String,
    dueDate:String,
    status:String,
    priorty:String
})

module.exports=mongoose.model("tasks",taskSchema)