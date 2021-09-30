import React from "react";
import { Route } from "react-router-dom";
import style from './Content.module.css';
import TasksList from "./Tasks/TasksList";
import Categories from "./Сategories/Categories";

const Content = (props) => {
    return (
        <div className={style.content}>
            <Route path='/tasks' render={() => <TasksList tasks={props.tasksPage.tasks} dispatch={props.dispatch}/>} />
            <Route path='/categories' render={() => <Categories categories={props.categoriesPage.categories} dispatch={props.dispatch}/>} />
        </div>
    )
}

export default Content;