import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import tasksSlice from "./slices/tasksSlice";

let reducers = combineReducers({
    tasksPage: tasksSlice,
    categoriesPage: categoriesSlice
});

const store = configureStore({
    reducer: reducers
});

export default store;