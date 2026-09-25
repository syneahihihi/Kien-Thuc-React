import { useDispatch } from 'react-redux';
import Todo from '../Todo';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { addTodo } from '../../redux/actions';

export default function TodoList() {
  const dispatch = useDispatch();

const [todoName, setToDoName]= useState('');
const [priority, setPriority]= useState('Medium');
const handleAddButtonClick = () => {
  dispatch(addTodo({
id: uuidv4(),
name: todoName,
priority: priority,
completed: false,
  }))
}
const handleName = (e) =>{
  setToDoName(e.target.value);
  console.log(e.target.value);
}

const handleSelect = (value) => {
  console.log(value)
  setPriority(value);
}
  return (
    <div className="todo-list-wrap">
      <div className="todo-list">
        <Todo name="Learn React" priority="High" defaultChecked />
        <Todo name="Learn Redux" priority="Medium" defaultChecked />
        <Todo name="Learn JavaScript" priority="Low" />
      </div>

      <div className="todo-form">
        <input type="text" className="todo-input" placeholder="Learn Database" onChange={handleName} />
        <select className="todo-select" defaultValue="Low" onChange={handleSelect}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className="todo-add-btn" type="button" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
    </div>
  );
}