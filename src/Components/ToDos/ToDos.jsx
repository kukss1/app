import React, { useState } from "react";
import styles from "./ToDo.module.scss";
import { data } from "./ToDo";
import ToDoItem from "./Item/ToDoItem";
import CreateTodoField from './Item/CreateFild/CreateTodoField'

const ToDo = () => {
  const [todo, setTodo] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todo];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodo(copy);
  };

  const removeTodo = (id) => {
    setTodo([...todo].filter((t) => t.id !== id));
  };


  return (
    <>
    <div className={styles.wrapper}>
      <div>
        <h1>To Do List</h1>
        {todo.map((todo) => (
          <ToDoItem 
          todo={todo} 
          key={todo.id} 
          changeTodo={changeTodo} 
          removeTodo={removeTodo}
          />
        ))}
      </div>
      <div className={styles.createWrapper}>
    <CreateTodoField setTodo={setTodo}/>
    </div>
    </div>
    
    </>
  );
};

export default ToDo;
