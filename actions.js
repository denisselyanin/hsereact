export const STATUS_CHANGE = 'STATUS_CHANGE'
export const ADD_TASK = 'ADD_TASK'
export const DESCRIPTION_CHANGE = 'DESCRIPTION_CHANGE'
export const NAME_CHANGE = 'NAME_CHANGE'


export const handleStatusChange = (find_task) => ({ 
    type: STATUS_CHANGE,
    payload: find_task
    })

export const handleAddTask = (input_task) => ({
    type: ADD_TASK,
    payload: input_task
    })


export const handleDescriptionChange = (description) => ({ 
    type: DESCRIPTION_CHANGE,
    payload: description
    })

export const handleNameChange = (name) => ({ 
    type: NAME_CHANGE,
    payload: name
    })