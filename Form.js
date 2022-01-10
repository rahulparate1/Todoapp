import React, { useState } from "react"
import ToDoList from "./ToDoList";

const Form = () => {

  const [userRegistration, setuserRegistration] = useState({
    title: "",
    description: "",
    status: ""
  })

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserRegistration({ ...userRegistration, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRecord])
    console.log(records);

    setuserRegistration({ title: "", description: "", phone: "" })
  }

  const deleteItem = (id) => {
    console.log("delete")

    setRecords((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })

  }

  return (
    <>
    <div className="container">
    <h1>Todo List App</h1>
      <form className="form-container" action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" autoComplete="off" placeholder="Todo Title"
            value={userRegistration.title}
            onChange={handleInput}
            name="title" id="title"
            required />
        </div>

        <div>
          <textarea type="text" autoComplete="off" placeholder="Description"
            value={userRegistration.description}
            onChange={handleInput}
            name="description"
             id="description"
             row={5}
             required />
        </div>

        <select type="status" autoComplete="off" placeholder="Status"
            value={userRegistration.status}
            onChange={handleInput}
            name="status" id="status" required>
          <option value="Todo">Todo</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Complete">Complete</option>
        </select>


        <button type="submit">SAVE</button>
      </form>
      </div>

      <div>
        {
          records.map((curElem, index) => {

            return (

              <ToDoList key={index} id={index} text={curElem} onSelect={deleteItem} />
            )
          })
        }

      </div>
    </>
  )
}

export default Form;