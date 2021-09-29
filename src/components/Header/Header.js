import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import style from "./Header.module.css";
import Taskmodal from "../Modals/TaskModal/TaskModal"
import CategoryModal from "../Modals/CategoryModal/CategoryModal"


const Header = (props) => {
    const [isTaskModalActive, setTaskModalActive] = useState(false);
    const [isCategoryModalActive, setCategoryModalActive] = useState(false);

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
            {isTaskModalActive ? <Taskmodal
                isActive={isTaskModalActive}
                setModalActive={setTaskModalActive}
                categories={props.state.categoriesPage.categories}
                dispatch={props.dispatch} /> : null}
            {isCategoryModalActive ? <CategoryModal
                isActive={isCategoryModalActive}
                setModalActive={setCategoryModalActive}
                dispatch={props.dispatch} /> : null}
        </div>
    )
}

export default Header;