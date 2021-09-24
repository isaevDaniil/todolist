const ADD_CATEGORY = "ADD_CATEGORY";

let initialState = {
    categories: [
        { id: 1, name: "Категория1", description: "Описание Категория1" },
        { id: 2, name: "Категория2", description: "Описание Категория1" },
        { id: 3, name: "Категория3", description: "Описание Категория1" },
    ]
}

const categoriesReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_CATEGORY:
            state.categories.push({ name: action.categoryName, description: action.categoryDescription });
            return state;
        default:
            return state;
    }
}

export const addCategoryCreator = (categoryName) => {
    return {
        type: ADD_CATEGORY,
        taskName: categoryName,
    }
}

export default categoriesReducer;