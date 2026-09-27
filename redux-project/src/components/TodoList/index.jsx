import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addTodo } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const todoList = useSelector(selectTodoList);

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority,
      completed: false,
    }));
  };

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div className="todo-list-wrap">
      <div className="todo-list">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </div>

      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Learn Database"
          value={todoName}
          onChange={handleNameChange}
        />
        <select className="todo-select" value={priority} onChange={handlePriorityChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className="todo-add-btn" type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}