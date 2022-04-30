import React from 'react'
import styles from '../ToDo.module.scss'
import { Check } from './Check'
import {BsTrash} from "react-icons/bs"


const ToDoItem = ({todo , changeTodo , removeTodo}) => {
    
  return (
    <>
    <div className={styles.itemWrapper}>
    <button onClick={() => changeTodo(todo.id)}>
      
        <Check isCompleted={todo.isCompleted}/>
        <div className={styles.item}>
        {todo.title}
        </div>
          
        </button>
        <BsTrash size={22} color='#0033ad' onClick={() => removeTodo(todo.id)}/>
        </div>
        </>
  )
}



export default ToDoItem