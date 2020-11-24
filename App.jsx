import React from 'react'
import { ToDoList } from './TaskList.jsx'

class App extends React.Component {
  render(){
    return (
      <div>
        <ToDoList/>
      </div>
    );
  }
}

export default App;