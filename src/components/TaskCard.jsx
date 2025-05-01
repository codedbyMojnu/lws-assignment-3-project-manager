import SortingBtn from "../assets/svg/SortingBtn";
import { useTaskList } from "../context/TaskContext";
import Task from "./Task";

export default function TaskCard({ category, onEditTask }) {
  const { tasks } = useTaskList();
  const backgroundColor = {
    todo: "bg-indigo-600",
    inprogress: "bg-yellow-500",
    done: "bg-teal-500",
    revised: "bg-rose-500",
  };

  const background = backgroundColor[category];
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      {tasks[category]?.length > 0 && (
        <div className={`rounded-lg ${background}  p-4`}>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {category} ({tasks[category]?.length})
            </h3>
            <SortingBtn />
          </div>
          <div>
            {tasks[category].map((task) => (
              <Task
                key={task.id}
                task={task}
                category={category}
                onEditTask={onEditTask}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
