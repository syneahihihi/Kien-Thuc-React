import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Learn React', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: false, priority: 'Medium' },
    { id: 3, name: 'Learn TypeScript', completed: false, priority: 'Medium' }
];

const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.find((item) => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, toggleTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;