import React from 'react'
import './App.css'

const task1 = {
  id: 1,
  name: "task1",
  description: "to do 1",
  completed: true
};

const task2 = {
  id: 2,
  name: "task2",
  description: "to do 2",
  completed: true
};

const task3 = {
  id: 3,
  name: "task3",
  description: "to do 3",
  completed: true
}

const task4 = {
  id: 4,
  name: "task4",
  description: "to do 4",
  completed: false
}

const task5 = {
  id: 5,
  name: "task5",
  description: "to do 5",
  completed: true
}

const Item = ({ task }) => {
  const GetStat  = () => {
    console.log("Task", task.id, "completed status =", task.completed)
  }
  
  return (
    <div className="Task">
      <div className="Name">{task.name}</div>
      <div className="Description">{task.description}</div>
      {task.completed ? <div className="Completed">completed</div> : <div className="Uncompleted">uncompleted</div>}
      <button className="Button" onClick={GetStat}>Get Status</button>
    </div>
  )
}

class MyToDoList extends React.Component {
  state = {
    tasks: [task1, task2, task3, task4, task5]
 }
 render() {
   return (
     <div>
       {this.state.tasks.map(it => <Item task={it}/>)}
     </div>
   )
 }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <MyToDoList/>
      </div>
    );
  }
}

export default App;
