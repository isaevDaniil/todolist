import React, { useEffect, useState } from "react";
import Task from "./Task";
import style from "./Tasks.module.css"

const TasksList = (props) => {
    const tasksComponents = props.tasks.map(t=><Task taskName={t.name} taskDescription={t.description} taskCategory={t.category}/>);
    return (
        <div className={style.tasksList}>
            {tasksComponents}
        </div>
    )
}

export default TasksList;