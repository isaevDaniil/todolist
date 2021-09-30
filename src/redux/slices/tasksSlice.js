import { createSlice } from "@reduxjs/toolkit";


const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState: {
        tasks: []
    },
    reducers: {
        downloadTasks(state, action) {
            state.tasks.push(...(action.payload));
        },
        addTask(state, action) {
            debugger;
            state.tasks.push(action.payload);
        },
        deleteTaskById(state, action) {
            debugger;
            const removeIndex = state.tasks.findIndex(t => t.id == action.payload);
            state.tasks.splice(removeIndex, 1);
        }
    }
});

export const { addTask, downloadTasks, deleteTaskById } = tasksSlice.actions;

export default tasksSlice.reducer;