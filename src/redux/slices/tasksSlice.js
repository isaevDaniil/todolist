import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState: {
        tasks: [
            { name: "Задача1", category: "Категория1", description: "Описание задачи" },
            { name: "Задача2", category: "Категория2", description: "Описание задачи" },
            { name: "Задача3", category: "Категория3", description: "Описание задачи" },
        ]
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        }
    }
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;