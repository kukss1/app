import React, { useState } from 'react'
import styles from './CreateTodoField.module.scss'




const CreateTodoField = ({setTodo}) => {


  const addTodo = (title) => {
    setTodo(prev =>[...prev,{
    id:new Date(),
    title,
    isCompleted:false
    }])
    setTitle('')
      }


 const [title , setTitle] = useState('') 
console.log(title)
  return (
    <div className={styles.wrapper}>
 <input 
 type="text" 
 onChange={e => setTitle(e.target.value)} 
 value={title}
 onKeyDown={e => e.key === 'Enter' && addTodo(title)}
 placeholder="Press Enter to add task"
/>
 <button onClick={() => setTitle(addTodo(title))}>Add</button>
    </div>
  )
}

export default CreateTodoField