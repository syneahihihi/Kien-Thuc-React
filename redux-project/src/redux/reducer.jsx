import filtersReducer from '../components/Filters/FilterSlice';
import TodoReducer from '../components/TodoList/TodoSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: TodoReducer
});

export default rootReducer;