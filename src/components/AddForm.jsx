import { useState } from "react";
import { useTaskList } from "../context/TaskContext";
export default function AddForm({
  onClose,
  editedCategory,
  editedTask,
  onUpdatedFinished,
}) {
  const [task, setTask] = useState(
    editedTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
    }
  );
  const [warningText, setWarningText] = useState("");
  const [category, setCategory] = useState(editedCategory || "todo");
  const { dispatch } = useTaskList();

  function handleAddTask() {
    if (!task.title || !task.description || !task.date) {
      setWarningText("Please fill up all the field.");
    } else {
      if (editedTask) {
        dispatch({ type: "EDITED_TASK", task, category, editedCategory });
        onUpdatedFinished();
      } else {
        dispatch({
          type: "ADDED_TASK",
          task,
          category,
        });
      }
      setTask({
        id: null,
        title: "",
        description: "",
        date: "",
      });
      setWarningText("");
      onClose();
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            {editedTask ? "Edit Task" : "Create Task"}
          </h2>
          {warningText && (
            <p className="text-center text-red-500">{warningText}</p>
          )}
          <form>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                name="taskName"
                value={task.title}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e) => {
                  setWarningText("");
                  setTask({
                    ...task,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e) => {
                  setWarningText("");
                  setTask({
                    ...task,
                    description: e.target.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={task.date}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e) => {
                  setWarningText("");
                  setTask({
                    ...task,
                    date: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e) => {
                  setWarningText("");
                  setCategory(e.target.value);
                }}
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  onUpdatedFinished();
                  onClose();
                }}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={(e) => {
                  e.preventDefault(), handleAddTask();
                }}
              >
                {editedTask ? "Update Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
