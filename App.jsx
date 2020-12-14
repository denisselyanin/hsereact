import React from 'react'
import { ToDoList } from './TaskList.jsx'

import { taskReducer } from './taskReducer.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(taskReducer)

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <ToDoList/>
      </Provider>
    );
  }
}

export default App;
