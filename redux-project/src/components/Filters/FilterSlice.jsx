import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    status: 'All',
    priority: ['High', 'Medium'],
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchFilter: (state, action) => {
            state.search = action.payload;
        },
        setStatusFilter: (state, action) => {
            state.status = action.payload;
        },
        setPriorityFilter: (state, action) => {
            state.priority = action.payload;
        },
    },
});

export const { setSearchFilter, setStatusFilter, setPriorityFilter } = filtersSlice.actions;
export default filtersSlice.reducer;