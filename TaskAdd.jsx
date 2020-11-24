import React from 'react'

import classNames from 'classnames/bind'
import styles from "./TaskAdd.module.scss"
const cx = classNames.bind(styles)

export const TaskAdd = ({
  name,
  description,
  onChangeName,
  onChangeDescription

 }) =>  (
     <div>
       <input
         className={cx("Input")}
         value={name}
         onChange={onChangeName}
         placeholder="name"
       />
       <input
         className={cx("Input")}
         value={description}
         onChange={onChangeDescription}
         placeholder="description"
       />
     </div>
   )