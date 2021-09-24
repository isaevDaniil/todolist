import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { addTaskCreator } from "../../redux/reducers/TasksReducer";
import Modal from "../Modals/Modal";
import style from "./Header.module.css";
import Taskmodal from "../Modals/TaskModal/TaskModal"
import CategoryModal from "../Modals/CategoryModal/CategoryModal"


const Header = (props) => {
    const [isTaskModalActive, setTaskModalActive] = useState(false);
    const [isCategoryModalActive, setCategoryModalActive] = useState(false);

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
                <Route path='/tasks' render={() => <button onClick={() => setTaskModalActive(true)}>Добавить задачу</button>} />
                <Route path='/categories' render={() => <button onClick={() => setCategoryModalActive(true)}>Добавить категорию</button>} />
            </div>
            <Modal isActive={isTaskModalActive || isCategoryModalActive} setActive={setTaskModalActive}>
                <Route path='/tasks' render={()=><Taskmodal title="Создание задачи" setModalActive={setTaskModalActive} categories={props.categoriesPage.categories} />}/>
                <Route path='/categories' render={()=><CategoryModal title="Создание категории" setModalActive={setCategoryModalActive}/>}/>
            </Modal>
        </div>
    )
}

export default Header;