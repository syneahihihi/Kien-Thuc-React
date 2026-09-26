
export const addTodo = (data) =>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const setSearchFilter = (text) => {
    return {
        type: 'filters/setSearchFilter',
        payload: text
    }
}