import { STATUS_CHANGE, ADD_TASK, DESCRIPTION_CHANGE, NAME_CHANGE } from './actions.js'

const initialState = {
    tasks: [],
    input_task: {
        id: 0,
        name: "",
        description: "",
        completed: false
      }
  }

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case STATUS_CHANGE: {
            function isEq(some_task) {
                return some_task === action.payload
              }
          
              const change_index = state.tasks.findIndex(isEq)
              const new_tasks = [...state.tasks]
          
              const new_task = { ...action.payload }
              new_task.completed = !new_task.completed
              new_tasks[change_index] = new_task

            return {
                ...state, 
                tasks: new_tasks
            }
        }
        case ADD_TASK: {
            const new_task = {...action.payload} 
            new_task.id = state.tasks.length + 1
            new_task.completed = false
            return {
                ...state,
                tasks: [...state.tasks, new_task]
            }
        }
        case DESCRIPTION_CHANGE: {
            return {
                ...state,
                input_task: {
                    ...state.input_task,
                   description: action.payload
                } 
                }
        }
        case NAME_CHANGE: {
            return {
                    ...state,
                    input_task: {
                        ...state.input_task,
                        name: action.payload
                    }   
                }
        }
        default: return state
    }
  }  