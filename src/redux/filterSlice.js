import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        currentFilter(state, action) {
            return action.payload;
        },
    }
});

export const filterReduser = filterSlice.reducer;
export const { currentFilter } = filterSlice.actions;