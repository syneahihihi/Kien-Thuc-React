const  initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
    { id: 1, name: 'Learn React', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: false, priority: 'Medium' },
    { id: 3, name: 'Learn TypeScript', completed: false, priority: 'Medium' },
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
                
}
default:
    return state;
}
}
export default rootReducer