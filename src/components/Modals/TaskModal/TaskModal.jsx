import React, { useState } from "react";
import { addTask } from "../../../redux/slices/tasksSlice";
import Modal from "../Modal";
import style from "./TaskModal.module.css";

const TaskModal = (props) => {
    const categoryPlaceHolder = "Выберите категорию";
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState(null);
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
        props.dispatch(addTask({ name: taskName, category: taskCategory, description: taskDescription }));
        handleClose(e);
    }
    return (
        <Modal title="Создание задачи" isActive={props.isActive} handleClose={handleClose} handleSubmit={handleSubmit}>
            <div className={style.modalBody}>
                <input className={style.taskNameInput} type="text" placeholder="Введите имя задачи" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <select className={style.taskCategorySelect} onChange={(e) => setTaskCategory(e.target.value)}>
                    <option className={style.selectPlaceholder} disabled selected>{categoryPlaceHolder}</option>
                    {categoriesOptions}
                </select>
                <input className={style.taskDescriptionInput} type="text" placeholder="Введите описание задачи" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            </div>
        </Modal>
    )
}

export default TaskModal;