import React from 'react'
import Filter from './components/Filters'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="app-shell">
      <Filter />
      <TodoList />
    </div>
  )
}

export default App
