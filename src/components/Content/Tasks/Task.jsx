import React from "react";
import { useState } from "react/cjs/react.development";
import ConfirmModal from "../../Modals/ConfirmModal/ConfirmModal";
import style from "./Task.module.css";

const Task = (props) => {
    const [isConfirmModalActive, setConfirmModalActive] = useState(false);

    return (
        <div className={style.task}>
            <div className={style.taskInfo}>
                <span>{props.taskObject.name}</span>{props.taskObject.category ? <a href="">{props.taskObject.category}</a> : null}
                <p>{props.taskObject.description}</p>
            </div>
            <div className={style.buttons}>
                <button className={style.editButton}>Edit</button>
                <button className={style.delButton} onClick={()=>setConfirmModalActive(true)}>Del</button>
            </div>
            {isConfirmModalActive ? <ConfirmModal
                isActive={isConfirmModalActive}
                setModalActive={setConfirmModalActive}
                deletionObjectType={"задачу"}
                deletionObject={props.taskObject}
                dispatch={props.dispatch} /> : null}
        </div>
    )
}

export default Task;