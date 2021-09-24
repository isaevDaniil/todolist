import React, { useState } from "react";
import style from "./CategoryModal.module.css";

const CategoryModal = (props) => {
    const categoryPlaceHolder = "Выберите категорию";
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState(categoryPlaceHolder);
    const [taskDescription, setTaskDescription] = useState("");

    let categories = [{ name: "asd" }, { name: "asdasd11" }, { name: "asdasd" }]
    const categoriesOptions = categories.map(c => <option value={c.name}>{c.name}</option>)

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
        <>
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
                <button className={style.closeButton} onClick={handleClose}>Создать</button>
            </div>
        </>
    )
}

export default CategoryModal;