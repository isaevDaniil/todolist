import React from "react";
import style from "./Modal.module.css";

const Modal = ({ isActive, setActive, children }) => {
    return (
        <div className={isActive ? `${style.modal} ${style.isActive}` : style.modal}>
            <div className={style.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal;