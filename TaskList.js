import React from 'react'
import { DrawTask } from './Task'
import { TaskAdd } from './TaskAdd'
import './App.css'

export class ToDoList extends React.Component {
  state = {
    tasks: [{
      id: 1,
      name: "task1",
      description: "to do 1",
      completed: true
    },
    {
      id: 2,
      name: "task2",
      description: "to do 2",
      completed: true
    },
    
    {
      id: 3,
      name: "task3",
      description: "to do 3",
      completed: true
    },
    
    {
      id: 4,
      name: "task4",
      description: "to do 4",
      completed: false
    },
    
    {
      id: 5,
      name: "task5",
      description: "to do 5",
      completed: true
    }],

    input_task: {
      id: 0,
      name: "",
      description: "",
      completed: false
    }
 }
 changeName = event => {
  const {value} = event.target
  
  this.setState(currentState => (
    {
    input_task: {...currentState.input_task, name: value}
    }
    ))
} 

changeDescription = event => {
  const {value} = event.target

  this.setState(currentState => (
    {
    input_task: {...currentState.input_task,
       description: value}
    }
    ))
} 
 addTask = () => {
  const new_task = {...this.state.input_task} 
  new_task.id = this.state.tasks.length
  new_task.completed = false
  this.state.input_task = new_task 
  this.setState(currentState => {
    const new_tasks = [...currentState.tasks, currentState.input_task]
    return {tasks: new_tasks}
  });
}

changeStatus = find_task => {
    function isEq(some_task) {
      return some_task === find_task
    }
    const change_index = this.state.tasks.findIndex(isEq)
    const new_tasks = [...this.state.tasks]

    const new_task = find_task
    new_task.completed = !new_task.completed
    new_tasks[change_index] = new_task

    this.setState({tasks: new_tasks})
}

 render() {
   return (
     <div>
       <TaskAdd 
       name={this.state.input_task.name}
       description={this.state.input_task.description}
       onChangeName={this.changeName}
       onChangeDescription={this.changeDescription}
       />
       <button
        className="AddButton"
        onClick={this.addTask}>Add Task</button>
       {this.state.tasks.map(it => <DrawTask task={it} buttFunc={this.changeStatus}/>)}
     </div>
   )
 }  
}