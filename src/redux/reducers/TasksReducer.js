const ADD_TASK = "ADD_TASK";

let initialState = {
    tasks:[
        {name:"Задача1", description:"Описание задачи"},
        {name:"Задача2", description:"Описаниasdsaе задачи"},
        {name:"Задача3", description:"Описание задачи"},
    ]
}

const tasksReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_TASK:
            state.tasks.push({name:action.taskName, description:action.taskDescription});
            return state;  
        default:
            return state;
    }
}

export const addTaskCreator = (taskName) =>{
    return {
        type:ADD_TASK,
        taskName:taskName,    
    }
}

export default tasksReducer;