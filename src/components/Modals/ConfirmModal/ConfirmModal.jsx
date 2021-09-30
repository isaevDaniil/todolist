import React, { useEffect, useState } from "react";
import { useIndexedDB } from "react-indexed-db";
import { useDispatch } from "react-redux";
import { deleteTaskById } from "../../../redux/slices/tasksSlice";
import Modal from "../Modal";
import style from "./ConfirmModal.module.css";

const ConfirmModal = (props) => {
    const { deleteRecord } = useIndexedDB("Items");
    const dispatch = useDispatch();

    const handleClose = (e) => {
        e.preventDefault();
        props.setModalActive(false);
    }
    const handleSubmit = (e) => {
        const id = props.deletionObject.id;
        debugger;
        deleteRecord(id);
        dispatch(deleteTaskById(id));
        handleClose(e);
    }
    return (
        <Modal title={props.title} isActive={props.isActive} handleClose={handleClose} handleSubmit={handleSubmit}>
            <div className={style.modalBody}>
                <span>Вы уверены что хотите удалить {props.deletionObjectType} "{props.deletionObject.name}"</span>
            </div>
        </Modal>
    )
}

export default ConfirmModal;