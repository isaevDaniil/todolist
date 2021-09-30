import React, { useState } from "react";
import { useIndexedDB } from "react-indexed-db";
import { addCategory } from "../../../redux/slices/categoriesSlice";
import Modal from "../Modal";
import style from "./CategoryModal.module.css";

const CategoryModal = (props) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    const db = useIndexedDB("Categories");

    const handleClose = (e) => {
        e.preventDefault();
        setCategoryName("");
        setCategoryDescription("");
        props.setModalActive(false);
    }
    const handleSubmit = (e) => {
        const newCategory = { name: categoryName, description: categoryDescription };
        db.add(newCategory);
        props.dispatch(addCategory(newCategory));
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