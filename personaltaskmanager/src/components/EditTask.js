import React from 'react'

export default function EditTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priorty, setPriorty] = useState("");


  return (
    <form className="row" >
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
          <button className="btn btn-secondary">Save Change</button>
        </div>
      </form>
  )
}
