import React, { useState } from "react";
import style from "./TaskModal.module.css";

const TaskModal = (props) => {
    const categoryPlaceHolder = "Выберите категорию";
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState(categoryPlaceHolder);
    const [taskDescription, setTaskDescription] = useState("");

    const categoriesOptions = props.categories.map(c => <option value={c.name}>{c.name}</option>)

    const handleClose = (e) => {
        e.preventDefault();
        setTaskName("");
        setTaskCategory(categoryPlaceHolder);
        setTaskDescription("");
        props.setModalActive(false);
    }
    const handleSubmit = (e) => {
        //e.preventDefault();
        handleClose(e);
    }
    return (
        <div >
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <div className={style.modalHeader}>
                    <span className={style.modalTitle}>{props.title}</span>
                    <button className={style.cancelButton} onClick={handleClose}>Close</button>
                </div>
                <div className={style.modalBody}>
                    <input className={style.taskNameInput} type="text" placeholder="Введите имя задачи" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                    <select className={style.taskCategorySelect} value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
                        <option className={style.selectPlaceholder} disabled selected>{taskCategory}</option>
                        {categoriesOptions}
                    </select>
                    <input className={style.taskDescriptionInput} type="text" placeholder="Введите описание задачи" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                </div>
                <div className={style.modalFooter}>
                    <button className={style.closeButton} onClick={handleClose}>Закрыть</button>
                    <input type="submit" value="Создать" />
                </div>
            </form>
        </div>
    )
}

export default TaskModal;