import React from 'react'
import './App.css'

export const TaskAdd = ({
  name,
  description,
  onChangeName,
  onChangeDescription

 }) =>  (
     <div>
       <input
         className="Input"
         value={name}
         onChange={onChangeName}
         placeholder="name"
       />
       <input
         className="Input"
         value={description}
         onChange={onChangeDescription}
         placeholder="description"
       />
     </div>
   )