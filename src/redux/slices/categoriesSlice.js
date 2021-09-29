import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: {
        categories: [
            { id: 1, name: "Категория1", description: "Описание Категория1" },
            { id: 2, name: "Категория2", description: "Описание Категория1" },
            { id: 3, name: "Категория3", description: "Описание Категория1" },
        ]
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push(action.payload);
        }
    }
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;