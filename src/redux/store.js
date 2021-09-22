import {combineReducers, createStore} from "redux";
import headerReducer from "./reducers/HeaderReducer";
import tasksReducer from "./reducers/TasksReducer";

let reducers = combineReducers({
    header: headerReducer,
    tasksPage : tasksReducer
});

let store = createStore(reducers);

export default store;