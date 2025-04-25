export default function tasksReducer(tasks, action) {
  if (action.type === 'add') {
    return [...tasks, action.task]
  }
  else if (action.type === 'change') {
    return tasks?.map((task) => {
      if (task.id === action.task.id) {
        return action.task;
      } else {
        return task;
      }
    })
  }
  else if (action.type === 'delete') {
    return tasks.filter((task) => task.id !== action.id)
  }
  else {
    return tasks;
  }
}
