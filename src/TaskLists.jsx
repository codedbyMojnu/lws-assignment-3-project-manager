import TaskList from "./TaskList";

export default function TaskLists({ tasks, onDelete, onEditTask }) {
  return (
    <div>
      {tasks?.map((task) => (
        <TaskList
          key={task?.id}
          task={task}
          onDelete={onDelete}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}
