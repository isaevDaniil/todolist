import React from "react";
import style from "./Category.module.css";

const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.categoryInfo}>
                <span>{props.categoryName}</span>
                <p>{props.categoryDescription}</p>
            </div>
            <div className={style.buttons}>
                <button className={style.editButton}>Edit</button>
                <button className={style.delButton}>Del</button>
            </div>
        </div>
    )
}

export default Category;