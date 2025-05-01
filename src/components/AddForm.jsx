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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-xl shadow-lg animate-slide-up p-6 relative">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-green-400 text-center">
            {editedTask ? "Edit Task" : "Create Task"}
          </h2>
        </div>

        {warningText && (
          <p className="text-center text-red-500 mb-2">{warningText}</p>
        )}

        <form>
          {/* Task Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Task Name
            </label>
            <input
              type="text"
              value={task.title}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:bg-gray-800"
              onChange={(e) => {
                setWarningText("");
                setTask({ ...task, title: e.target.value });
              }}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              value={task.description}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none  focus:bg-gray-800"
              onChange={(e) => {
                setWarningText("");
                setTask({ ...task, description: e.target.value });
              }}
            ></textarea>
          </div>

          {/* Due Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={task.date}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 focus:outline-none  focus:bg-gray-800"
              onChange={(e) => {
                setWarningText("");
                setTask({ ...task, date: e.target.value });
              }}
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Category
            </label>
            <select
              value={category}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 focus:outline-none  focus:bg-gray-800"
              onChange={(e) => {
                setWarningText("");
                setCategory(e.target.value);
              }}
            >
              <option value="todo">To-Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
              <option value="revised">Revised</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => {
                onUpdatedFinished();
                onClose();
              }}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleAddTask();
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              {editedTask ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
