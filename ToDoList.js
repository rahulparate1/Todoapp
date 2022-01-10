import React from "react";
import "./App.css"

const ToDoList = (props) => {

    

    return(
        <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={() => {props.onSelect(props.id)}} />
        <div key={props.text.id}>
                <div className="todo-info">
                <span>Title: {props.text.title}</span><br />
                <span>Description: {props.text.description}</span><br />
                <span>Status: {props.text.status}</span><br />
                </div>
              </div>
         </div>
         
         </>
    )
}

export default ToDoList;
