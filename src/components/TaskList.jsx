import { useState } from "react";
import AddBtnSvg from "../assets/svg/AddBtnSvg";
import { useTaskList } from "../context/TaskContext";
import AddForm from "./AddForm";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [showForm, setShowForm] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [editedCategory, setEditedCategory] = useState(null);
  const { searchQuery, tasks } = useTaskList();

  // Search by title

  const searchText = searchQuery || "";

  const filterdTasks = {
    todo: tasks.todo.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    inprogress: tasks.inprogress.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    done: tasks.done.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    revised: tasks.revised.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
  };

  //No task found when search
  const noTaskFound =
    filterdTasks?.todo?.length > 0 &&
    filterdTasks?.inprogress?.length > 0 &&
    filterdTasks?.done?.length > 0 &&
    filterdTasks?.revised?.length > 0;

  //if any task exist
  const anyTasksExist =
    tasks?.todo?.length > 0 ||
    tasks?.inprogress?.length > 0 ||
    tasks?.done?.length > 0 ||
    tasks?.revised?.length > 0;

  // Hanlde Edit Task
  function handleEditTask(category, task) {
    setEditedCategory(category);
    setEditedTask(task);
    setShowForm(true);
  }

  //After Updated Finished
  function updatedFinished() {
    setEditedCategory(null);
    setEditedTask(null);
    setShowForm(false);
  }

  function handleCloseForm() {
    setShowForm(false);
  }
  return (
    <>
      {showForm && (
        <AddForm
          key={editedTask ? editedTask.id : "new"}
          onClose={handleCloseForm}
          editedCategory={editedCategory}
          editedTask={editedTask}
          onUpdatedFinished={updatedFinished}
        />
      )}

      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              onClick={() => setShowForm(true)}
            >
              <AddBtnSvg />
              Add
            </button>
          </div>
        </div>

        {anyTasksExist ? (
          <div className="mx-2 mb-6 flex flex-wrap">
            {Object.keys(filterdTasks).map((category) => (
              <TaskCard
                key={category}
                category={category}
                onEditTask={handleEditTask}
                tasks={filterdTasks}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p>Task List is empty. Add task first.</p>
          </div>
        )}
      </div>
    </>
  );
}
