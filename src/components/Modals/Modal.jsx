import React from "react";
import style from "./Modal.module.css";

const Modal = ({isActive, setActive}) => {
    return (
        <div className={style.modal} onClick={()=> setActive(false)}>
            <div className={style.modalContent}>

            </div>
        </div>
    )
}

export default Modal;