import React from "react";
import style from "./Task.module.css";

const Task = (props) => {
    return (
        <div className={style.task}>
            <div className={style.taskInfo}>
                <span>{props.taskName}</span><a href="">Категория</a>
                <p>{props.taskDescription}</p>
            </div>
            <div className={style.buttons}>
                <button className={style.editButton}>Edit</button>
                <button className={style.delButton}>Del</button>
            </div>
        </div>
    )
}

export default Task;