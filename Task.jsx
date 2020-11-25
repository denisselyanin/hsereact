import React from 'react'
import './App.css'

import classNames from 'classnames/bind'
import styles from "./Task.module.scss"
const cx = classNames.bind(styles)

export const DrawTask = ({ task, buttFunc}) => {
  const chStat  = () => {
    console.log("Task", task.id, "completed status =", task.completed)
    buttFunc(task)
  }
  
  return (
    <div className={cx("Task")}>
    <div className={cx("Name")}>{task.name}</div>
      <div className={cx("Description")}>{task.description}</div>
      <div className={cx("Completed", `Completed-is-${task.completed}`)}>{task.completed ? "complete" : "incomplete"}</div> 
      <button className={cx("Button", `Button`)} onClick={chStat}>Change Status</button>
    </div>
  )
}
