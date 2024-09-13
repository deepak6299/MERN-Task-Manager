import React, {  useState } from "react";

export default function AddTask({onPostData}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorty, setPriorty] = useState("");
  const[status,setStatus]=useState("")

  const handleAddTask = async (e) => {
    e.preventDefault();
    console.log(title, description, dueDate, priorty,status +"hh88");
    onPostData({title, description, dueDate, priorty,status})
   setTitle(" ")
   setDescription(" ")
   setDueDate(" ")
   setPriorty(" ")
   setStatus(" ")
  };

  return (
    <div className="container text-center" style={{ marginTop: "40px" }}>
      <form className="row" onSubmit={handleAddTask}>
        <div className="col">
        
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="col">
        
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="col">
          
          <input
            type="date"
            className="form-control"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value=" ">Status</option>
            <option value="Pending">Pending</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="col">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setPriorty(e.target.value)}
            value={priorty}
          >
            <option value=" ">Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="col">
          <button className="btn btn-secondary">AddTAsk</button>
        </div>
      </form>
    </div>
  );
}
