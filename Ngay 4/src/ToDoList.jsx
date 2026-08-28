import React, { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState(['Go to work', 'Eat Breakfast', 'Walk the dog'])
  const [newTask, setNewTask] = useState('')

  function handleAddTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, newTask])
      setNewTask('')
    }
  }

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function handleDeleteTask(index) {
    setTasks((preTask) => preTask.filter((_, i) => i !== index))
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTask = [...tasks]
      ;[updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]]
      setTasks(updateTask)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks]
      ;[updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]]
      setTasks(updateTask)
    }
  }

  return (
    <div className="todo-app">
      <h1>To-Do-List</h1>

      <div className="todo-input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-row" key={index}>
            <span>{task}</span>

            <div className="task-actions">
              <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
              <button className="toggle-btn move-up-btn" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>
              <button className="toggle-btn move-down-btn" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDoList
