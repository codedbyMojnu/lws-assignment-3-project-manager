import DeleteBtn from "../assets/svg/DeleteBtn";
import EditPen from "../assets/svg/EditPen";
import { useTaskList } from "../context/TaskContext";
import formatDate from "./../utils/formatDate";

export default function Task({ task, category, onEditTask }) {
  const { tasks, dispatch } = useTaskList();

  //category is needed for delete a task
  function handleRemovedTask(category, taskId) {
    dispatch({
      type: "REMOVED_TASK",
      category,
      taskId,
    });
  }
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {task.title}
        </h4>

        <div className="flex gap-2 mt-1">
          <div onClick={() => handleRemovedTask(category, task.id)}>
            <DeleteBtn />
          </div>
          <div onClick={() => onEditTask(category, task)}>
            <EditPen />
          </div>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{formatDate(task.date)}</p>
    </div>
  );
}
