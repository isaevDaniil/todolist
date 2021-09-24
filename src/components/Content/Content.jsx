import React from "react";
import { Route } from "react-router-dom";
import style from './Content.module.css';
import Tasks from "./Tasks/Tasks";
import Categories from "./Сategories/Categories";

const Content = (props) => {
    return (
        <div className={style.content}>
            <Route path='/tasks' render={() => <Tasks tasks={props.tasksPage.tasks} />} />
            <Route path='/categories' render={() => <Categories categories={props.categoriesPage.categories} />} />
        </div>
    )
}

export default Content;