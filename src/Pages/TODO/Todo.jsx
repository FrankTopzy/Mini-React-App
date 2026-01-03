import './Todo.css'
import checkbox from '../../assets/TODO/checkbox.png'
import checkedBox from '../../assets/TODO/checkbox-checked.png'
import trash from '../../assets/TODO/trash.png'
import { use, useEffect, useState } from 'react'
import { useRef } from 'react';

function Todo() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || [])
  const hasRun = useRef(false)
  

  const handleInput = (e) => {
    setTask(e.target.value)
  };

  const handleAddTask = () => {
    if(task.trim() !== "") {
      setTodo(prev => [...prev, { text: task, checked: false }]);
      setTask("")
    } else (
      alert("Please Enter task!!!")
    )
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      handleAddTask;
    }
  })

  /*useEffect(() => {
    window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !hasRun.current) {
      handleAddTask();
      hasRun.current = true
    }
  })
  }, [])*/
  

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo])
  

  const handleCheck = (index) => {
    setTodo(prev => prev.map((item, i) => { //[...prev, {checked: !item.checked}]
      if (i === index) {
        return { ...item, checked: !item.checked }
      }
      return item;
    }))
  }

  const handleDeleteTask = (index) => {
    setTodo(prev => todo.filter((_, i) => i !== index));
  }

  const todoList = todo.map((item, index) => {
    return (<p key={index}>
      <img src={item.checked ? checkedBox : checkbox } alt="" onClick={() => {handleCheck(index)}}/>
      <span>{item.text}</span>
      <img src={trash} alt="" width="40px" onClick={() => handleDeleteTask(index)}/>
    </p>)
  })

  const completedTasks = todo.filter((item) => item.checked).length;

  return (
    <div className='todo'>
      <div className="todo-app">
        <div className='input-field'>
          <h2>{completedTasks}/{todo.length} Task {todo.length >= 1 ? "Completed" : "Added"}</h2>
          <div className="input">
            <input type="text" value={task} placeholder='Add new task........' onChange={handleInput}/>
            <button onClick={handleAddTask}>Add</button>
          </div>
        </div>

        <div className="tasks">
          {todoList}
        </div>
      </div>
    </div>
  )
}

export default Todo
