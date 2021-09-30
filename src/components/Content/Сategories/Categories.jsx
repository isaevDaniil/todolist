import React from "react";
import Category from "./Category";
import style from "./Categories.module.css"
import { useSelector } from "react-redux";

const Categories = (props) => {
    const categories = useSelector(state => state.categoriesPage.categories)
    const categoryComponents = categories.map(c => <Category categoryName={c.name} categoryDescription={c.description} />);
    return (
        <div className={style.categoriesList}>
            {categoryComponents}
        </div>
    )
}

export default Categories;