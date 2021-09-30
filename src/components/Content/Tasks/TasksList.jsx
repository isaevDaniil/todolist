import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import style from "./Tasks.module.css"

const TasksList = (props) => {
    const tasks = useSelector(state => state.tasksPage.tasks);
    const tasksComponents = tasks.map(t => <Task taskObject={t} dispatch={props.dispatch} />);
    return (
        <div className={style.tasksList}>
            {tasksComponents}
        </div>
    )
}

export default TasksList;