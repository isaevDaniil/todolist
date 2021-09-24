import { combineReducers, createStore } from "redux";
import categoriesReducer from "./reducers/CategoriesReducer";
import headerReducer from "./reducers/HeaderReducer";
import tasksReducer from "./reducers/TasksReducer";

let reducers = combineReducers({
    header: headerReducer,
    tasksPage: tasksReducer,
    categoriesPage: categoriesReducer
});

let store = createStore(reducers);

export default store;