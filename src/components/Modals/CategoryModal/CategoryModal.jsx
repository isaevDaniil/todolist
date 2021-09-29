import React, { useState } from "react";
import { addCategory } from "../../../redux/slices/categoriesSlice";
import Modal from "../Modal";
import style from "./CategoryModal.module.css";

const CategoryModal = (props) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    const handleClose = (e) => {
        e.preventDefault();
        setCategoryName("");
        setCategoryDescription("");
        props.setModalActive(false);
    }
    const handleSubmit = (e) => {
        props.dispatch(addCategory({ id: 4, name: categoryName, description: categoryDescription }));
        handleClose(e);
    }

    return (
        <Modal title={"Создание категории"} isActive={props.isActive} handleClose={handleClose} handleSubmit={handleSubmit}>
            <div className={style.modalBody}>
                <input className={style.categoryNameInput} type="text" placeholder="Введите имя категории" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                <textarea className={style.categoryDescriptionInput} placeholder="Введите описание категории" value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)}></textarea>
            </div>
        </Modal>
    )
}

export default CategoryModal;