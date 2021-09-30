import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: {
        categories: []
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push(action.payload);
        },
        downloadCategories(state, action) {
            state.categories.push(...(action.payload));
        }
    }
});

export const { addCategory, downloadCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;