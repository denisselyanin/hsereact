import React from 'react'
import './App.css'

export const DrawTask = ({ task, buttFunc}) => {
  const chStat  = () => {
    console.log("Task", task.id, "completed status =", task.completed)
    buttFunc(task)
  }
  
  return (
    <div className="Task">
      <div className="Name">{task.name}</div>
      <div className="Description">{task.description}</div>
      {task.completed ? <div className="Completed">completed</div> : <div className="Uncompleted">uncompleted</div>}
      <button className="Button" onClick={chStat}>Change Status</button>
    </div>
  )
}
