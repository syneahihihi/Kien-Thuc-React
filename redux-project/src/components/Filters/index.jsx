import { useDispatch, useSelector } from 'react-redux';
import {
  setPriorityFilter,
  setSearchFilter,
  setStatusFilter,
} from '../../redux/actions';

const priorityClassMap = {
  High: 'priority-chip high',
  Medium: 'priority-chip medium',
  Low: 'priority-chip low',
};

function Filters() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.filters.search);
  const status = useSelector((state) => state.filters.status);
  const priorities = useSelector((state) => state.filters.priority);

  const handleSearchChange = (event) => {
    dispatch(setSearchFilter(event.target.value));
  };

  const handleStatusChange = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };

  const handlePriorityToggle = (priority) => {
    const nextPriorities = priorities.includes(priority)
      ? priorities.filter((item) => item !== priority)
      : [...priorities, priority];

    dispatch(setPriorityFilter(nextPriorities));
  };

  return (
    <div className="filter-panel">
      <h1 className="todo-title">TODO APP with REDUX</h1>

      <div className="filter-section">
        <label className="filter-label">Search</label>
        <div className="search-box">
          <input
            type="text"
            placeholder="input search text"
            value={searchText}
            onChange={handleSearchChange}
          />
          <span className="search-icon">⌕</span>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Filter By Status</label>
        <div className="status-row">
          <label className="status-option">
            <input
              type="radio"
              name="status"
              value="All"
              checked={status === 'All'}
              onChange={handleStatusChange}
            />
            <span>All</span>
          </label>
          <label className="status-option">
            <input
              type="radio"
              name="status"
              value="Completed"
              checked={status === 'Completed'}
              onChange={handleStatusChange}
            />
            <span>Completed</span>
          </label>
          <label className="status-option">
            <input
              type="radio"
              name="status"
              value="Todo"
              checked={status === 'Todo'}
              onChange={handleStatusChange}
            />
            <span>To do</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Filter By Priority</label>
        <div className="priority-list">
          {['High', 'Medium', 'Low'].map((p) => (
            <button
              type="button"
              key={p}
              className={`${priorityClassMap[p]} ${priorities.includes(p) ? 'selected' : ''}`}
              aria-pressed={priorities.includes(p)}
              onClick={() => handlePriorityToggle(p)}
            >
              <span>{p}</span>
              <span className="remove-tag">×</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
