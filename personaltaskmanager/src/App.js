import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState,useEffect } from "react";

function App() {
  const [task,setTask]=useState([])
  useEffect(()=>{
    getData()
  
  },[])

  // getting data from database(mongodb)
  const getData=async()=>{
    let result=await fetch("http://localhost:5000/gettask")
    result=await result.json()
  
    setTask(result)
    console.log(result);
  }

  // post data to server
const postData=async(item)=>{
  let result = await fetch("http://localhost:5000/posttask", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });

  getData()
}
// delete
const delteTask=async(id)=>{
  let result=await fetch(`http://localhost:5000/deletePost/${id}`,{
    method:"delete"
  })
console.log("deleteApi" +id);

  getData()
}

// edit

  return (
    <div className="taskManager">
      <h2 style={{textAlign:"center"}}>Task Manager</h2>
      <AddTask onPostData={postData}/>
      <TaskList task={task} delteTask={delteTask} getData={getData}/>
    </div>
  );
}

export default App;
