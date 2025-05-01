export default function taskReducer(tasks, action) {
    if (action.type === "ADDED_TASK") {
        const category = action.category;
        return { ...tasks, [category]: [...tasks[category], action.task] }
    }
    else if (action.type === "REMOVED_TASK") {
        const category = action.category;
        return { ...tasks, [category]: tasks[category].filter((task) => task.id !== action.taskId) }
    }
    else if (action.type === "EDITED_TASK") {
        const category = action.category;
        const oldCategory = action.editedCategory;
        //if category changed
        if (category !== action.editedCategory) {
            return { ...tasks, [oldCategory]: tasks[oldCategory].filter((task) => task.id !== action.task.id), [category]: [...tasks[category], action.task] }
        }
        //if category not changed
        return {
            ...tasks, [category]: tasks[category].map((taskItem) => {
                if (taskItem.id === action.task.id) {
                    return action.task;
                } else {
                    return taskItem;
                }
            })
        }
    }

    return tasks;
}

