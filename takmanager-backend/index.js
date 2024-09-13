const express=require( "express")
const cors=require("cors")
const app=express()

require("./db/config")
const Task=require("./db/TaskInfo")


app.use(cors())
app.use(express.json());

app.get("/gettask",async(req,resp)=>{
    const task=await Task.find()
    resp.send(task)
})


app.post("/posttask",async(req,resp)=>{
    const task=new Task(req.body)
    let result=await task.save()
    resp.send(result)
})

app.delete("/deletePost/:id",async(req,resp)=>{
    const task=await Task.deleteOne({_id:req.params.id})
 
        resp.send(task)
    
})

app.get('/task/:id',async(req,resp)=>{
    let task=await Task.findOne({_id:req.params.id});
    resp.send(task)
})

app.put('/taskUpdate/:id',async(req,resp)=>{
    let task =await Task.updateOne({_id:req.params.id},{
        $set:req.body
    })
    resp.send(task)
})
app.listen(5000)