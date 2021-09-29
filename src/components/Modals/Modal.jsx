import React, { useState } from "react";
import style from "./Modal.module.css";

const Modal = (props) => {

    return (
        <div className={props.isActive ? `${style.modal} ${style.isActive}` : style.modal}>
            <div className={style.modalContent}>
                <div className={style.modalHeader}>
                    <h4 className={style.modalTitle}>{props.title}</h4>
                    <button className={style.cancelButton} onClick={props.handleClose}>Close</button>
                </div>
                {props.children}
                <div className={style.modalFooter}>
                    <button className={style.closeButton} onClick={props.handleClose}>Закрыть</button>
                    <button className={style.closeButton} onClick={props.handleSubmit}>Создать</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;