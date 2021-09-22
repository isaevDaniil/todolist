import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { addTaskCreator } from "../../redux/reducers/TasksReducer";
import Modal from "../Modals/Modal";
import style from "./Header.module.css";


const Header = (props) => {
    const [isModalActive, setModalActive] = useState(true);


    let addTask = () => {
        const action = addTaskCreator("ZADACHA");
        props.dispatch(action);
    }
    return (
        <div className={style.header}>
            <div className={style.title}>ToDo List</div>
            <div className={style.navPanel}>
                <NavLink to='/tasks' activeClassName={style.activeLink}>Задачи</NavLink>
                <NavLink to='/categories' activeClassName={style.activeLink}>Категории</NavLink>
            </div>
            <div className={style.addButton}>
                <Route path='/tasks' render={()=> <button onClick={()=>setModalActive(true)}>Добавить задачу</button> } />
                <Route path='/categories' render={()=><button>Добавить категорию</button>} />
            </div>
            <Modal isActive = {isModalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Header;