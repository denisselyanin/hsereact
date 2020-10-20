import React from 'react';
import './App.css';

const task1 = {
  id: 1,
  name: 'task1',
  description: 'What needs to be done1',
  completed: true
}

const task2 = {
  id: 2,
  name: 'task2',
  description: 'What needs to be done2',
  completed: true
}

const task3 = {
  id: 3,
  name: 'task3',
  description: 'What needs to be done3',
  completed: false
}

const task4 = {
  id: 4,
  name: 'task4',
  description: 'What needs to be done4',
  completed: true
}

const task5 = {
  id: 5,
  name: 'task5',
  description: 'What needs to be done5',
  completed: false
}

const task6 = {
  id: 6,
  name: 'task6',
  description: 'What needs to be done6',
  completed: false
}

class MyToDoList extends React.Component {
  state = {
    tasks: [task1, task2, task3, task4, task5, task6]
   }
   render() {
     return (
     <div>
      {this.state.tasks.map(it => <Item task={it}/>)}
      </div>
     );
   }
}

const tasks = [task1, task2, task3, task4, task5, task6]

const Item = ({task}) => {
  const press = () => {
    console.log('Task ' + task.id + ' completed status = ' + task.completed)
  }
  return <div>
          <div className="Name">{task.name}</div>
          <div className="Description">{task.description}</div>
          {task.completed ? <div className="True">completed</div> : <div className="False">uncompleted</div>}
          <button onClick={press} className="Button">Get Status</button>
  </div>
};

const List = () => {
  const data = tasks;
  return (
  <div>
    {data.map(it => <Item task={it}/>)}
  </div>
  )
};

class App extends React.Component {
  state = {
  }

  render() {
    return (
      
        <MyToDoList/>
      
    );
  }
}



export default App;
