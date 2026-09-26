export const selectTodoList = (state) => {
  const todoRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });
  return todoRemaining;
}

export const searchTexts = (state) => {
  return state.filters.search;
}