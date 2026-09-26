import { useState } from "react";
import React from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import { setSearchFilter } from "../../redux/actions";

function Filters() {
    const [priority, setPriority] = useState(['High', 'Medium']);
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const togglePriority = (value) => {
        setPriority((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            }
            return [...prev, value];
        });
    };

    const priorityClassMap = {
        High: 'priority-chip high',
        Medium: 'priority-chip medium',
        Low: 'priority-chip low',
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        dispatch(setSearchFilter(e.target.value));
    }

  return (
    <div className='filter-panel'>
      <h1 className="todo-title">TODO APP with REDUX</h1>

      <div className="filter-section">
        <label className="filter-label">Search</label>
        <div className="search-box">
          <input type="text" placeholder="input search text" value={searchText} onChange={handleSearchChange} />
          <span className="search-icon">⌕</span>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Filter By Status</label>
        <div className="status-row">
          <label className="status-option">
            <input type="radio" name="status" value="All" defaultChecked />
            <span>All</span>
          </label>
          <label className="status-option">
            <input type="radio" name="status" value="Completed" />
            <span>Completed</span>
          </label>
          <label className="status-option">
            <input type="radio" name="status" value="Todo" />
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
              className={`${priorityClassMap[p]} ${priority.includes(p) ? 'selected' : ''}`}
              onClick={() => togglePriority(p)}
            >
              <span>{p}</span>
              <span className="remove-tag">×</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filters
