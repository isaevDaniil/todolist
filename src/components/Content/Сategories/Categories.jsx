import React from "react";
import Category from "./Category";
import style from "./Categories.module.css"

const Categories = (props) => {
    const categoryComponents = props.categories.map(c => <Category categoryName={c.name} categoryDescription={c.description} />);
    return (
        <div className={style.categoriesList}>
            {categoryComponents}
        </div>
    )
}

export default Categories;