import { useState } from "react";
export default function AddTaskForm({ onAddTask, nextId }) {
  const [task, setTask] = useState({
    id: nextId,
    text: "",
    done: false,
  });

  return (
    <div>
      <input
        placeholder="Add a Task"
        type="text"
        value={task?.text}
        onChange={(e) =>
          setTask({
            ...task,
            text: e.target.value,
          })
        }
      />
      <button
        onClick={() => {
          onAddTask(task),
            setTask({
              id: nextId,
              text: "",
              done: false,
            });
        }}
      >
        Add
      </button>
    </div>
  );
}
