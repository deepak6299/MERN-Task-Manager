import React, { useEffect, useState } from "react";

export default function TaskList({ task, delteTask, getData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorty, setPriorty] = useState("");
  const[status,setStatus]=useState("")
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleDeleteTask = (id) => {
    console.log(id);
    delteTask(id);
  };

  //  getting one data for updating
  const handleEditTask = async (id) => {
    let result = await fetch(`http://localhost:5000/task/${id}`);
    result = await result.json();
    console.log(result);
    setTitle(result.title);
    setDescription(result.description);
    setDueDate(result.dueDate);
    setPriorty(result.priorty);
    setStatus(result.status)
    setCurrentTaskId(result._id);
  };

  //  update task
  async function updatelist(e) {
    console.log(currentTaskId);
    
    e.preventDefault();
    console.log(title, description, dueDate, priorty,status);
    let result = await fetch(
      `http://localhost:5000/taskUpdate/${currentTaskId}`,
      {
        method: "put",
        body: JSON.stringify({ title, description, dueDate, priorty,status }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.log(result);
    getData();
  }
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Pending":
        return "badge bg-danger"; // Red
      case "In-progress":
        return "badge bg-warning"; // Yellow
      case "Completed":
        return "badge bg-success"; // Green
      default:
        return "badge bg-secondary"; // Default
    }
  };
  return (
    <div className="container text-center ">
      {task.map((item) => (
        <div
          className="row alert alert-info"
          style={{ marginTop: "20px" }}
          key={item._id}
        >
          <div className="col">{item.title}</div>
          <div className="col">{item.description}</div>
          <div className="col">{item.dueDate}</div>
          <div className="col"><span class="badge text-bg-danger"className={getStatusBadgeClass(item.status)}>
          {item.status} </span></div>
          <div className="col">{item.priorty}</div>
          <div className="col">
            <button
              className=" btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleEditTask(item._id)}
            >
              Edit
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
             
              <form className="row">
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
            <option value="Low">Pending</option>
            <option value="Medium">In-progress</option>
            <option value="High">completed</option>
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
                  <button className="btn btn-primary" onClick={updatelist}>
                    Save Change
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
