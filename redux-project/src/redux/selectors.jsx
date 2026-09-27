import { createSelector } from '@reduxjs/toolkit';

export const selectTodoList = createSelector(
  [
    (state) => state.todoList,
    (state) => state.filters.search,
    (state) => state.filters.status,
    (state) => state.filters.priority,
  ],
  (todoList, search, status, priority) => todoList.filter((todo) => {
    const matchesSearch = todo.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All'
      || (status === 'Completed' && todo.completed)
      || (status === 'Todo' && !todo.completed);
    const matchesPriority = priority.length === 0
      || priority.includes(todo.priority);
    return matchesSearch && matchesStatus && matchesPriority;
  }),
);

export const searchTexts = (state) => {
  return state.filters.search;
}