import { useReducer } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskLists from "./TaskLists";
import { initialTasks } from "./data/initialTasks";
import tasksReducer from "./reducer/tasksReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // Add a Task
  function handleAddTask(task) {
    dispatch({
      type: "add",
      task: task,
    });
  }

  // handle edit a task
  function handleEditTask(newTask) {
    dispatch({
      type: "change",
      task: newTask,
    });
  }

  // Delete a Task
  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete",
      id: taskId,
    });
  }

  return (
    <>
      <AddTaskForm
        onAddTask={handleAddTask}
        nextId={tasks[tasks.length - 1]?.id + 1}
      />
      <TaskLists
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </>
  );
}
