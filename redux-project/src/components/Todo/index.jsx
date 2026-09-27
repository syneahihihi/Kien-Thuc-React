import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux/actions';

const priorityClassMapping = {
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export default function Todo({ id, name, priority, completed }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${completed ? 'checked' : ''}`}>
      <label className="todo-main">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodo(id))}
          id={`todo-${name}`}
        />
        <span className="todo-label">{name}</span>
      </label>
      <span className={`priority-badge ${priorityClassMapping[priority]}`}>
        {priority}
      </span>
    </div>
  );
}