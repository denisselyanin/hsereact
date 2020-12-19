import React from 'react'
import { DrawTask } from './Task.jsx'
import { TaskAdd } from './TaskAdd.jsx'

import classNames from 'classnames/bind'
import styles from "./TaskList.module.scss"

import { connect } from 'react-redux'
import { handleStatusChange, handleAddTask, handleDescriptionChange, handleNameChange} from './actions.js'
const cx = classNames.bind(styles)

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  input_task: state.input_task,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnStatusChange: (find_task) => dispatch(handleStatusChange(find_task)),
  dispatchOnAddTask: (input_task) => dispatch(handleAddTask(input_task)),
  dispatchOnNameChange: (name) => dispatch(handleNameChange(name)),
  dispatchOnDescriptionChange: (description) => dispatch(handleDescriptionChange(description))
})

const ToDoListComponent = ({ 
  tasks, 
  input_task, 
  dispatchOnStatusChange,
  dispatchOnAddTask,
  dispatchOnNameChange,
  dispatchOnDescriptionChange
  
  }) => {

 const changeName = (event) => {
  dispatchOnNameChange(event.target.value)
}

const changeDescription = (event) => {
  dispatchOnDescriptionChange(event.target.value)
}
 const addTask = () => {
  dispatchOnAddTask(input_task)
}

const changeStatus = (find_task) => {
    dispatchOnStatusChange(find_task)
}

  return (
    <div>
      <TaskAdd 
        name={input_task.name}
        description={input_task.description}
        onChangeName={changeName}
        onChangeDescription={changeDescription}
      />
      <button
        className={cx("Button")}
        onClick={addTask}>Add Task
      </button>
      <div className={cx("Container")}> 
        {tasks.map(it => <DrawTask task={it} buttFunc={changeStatus}/>)}
      </div>
     </div>
   )
}

export const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent)
