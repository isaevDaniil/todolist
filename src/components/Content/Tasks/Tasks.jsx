import React from "react";
import Task from "./Task";
import style from "./Tasks.module.css"

const Tasks = (props) => {
    const tasksComponents = props.tasks.map(t=><Task taskName={t.name} taskDescription={t.description}/>);
    return (
        <div className={style.tasksList}>
            {tasksComponents}
        </div>
    )
}

export default Tasks;