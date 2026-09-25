import { useState } from 'react';

const priorityClassMapping = {
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export default function Todo({ name, priority, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className={`todo-item ${checked ? 'checked' : ''}`}>
      <label className="todo-main">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleCheckbox}
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