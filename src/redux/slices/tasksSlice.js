import { createSlice } from "@reduxjs/toolkit";


const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        downloadTasks(state, action) {
            state.tasks.push(...(action.payload));
        }
    }
});

export const { addTask, downloadTasks } = tasksSlice.actions;

export default tasksSlice.reducer;