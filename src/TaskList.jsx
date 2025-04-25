import { useState } from "react";
export default function TaskList({ task, onDelete, onEditTask }) {
  const [editMode, setEditMode] = useState(false);
  const [newTask, setNewTask] = useState(task);
  return (
    <div style={{ display: "block" }}>
      <input
        type="checkbox"
        checked={newTask?.done}
        onChange={(e) => {
          const updatedTask = { ...newTask, done: e.target.checked };
          setNewTask(updatedTask);
          onEditTask(updatedTask);
        }}
      />

      {editMode ? (
        <input
          type="text"
          value={newTask?.text}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              text: e.target.value,
            })
          }
        />
      ) : (
        <p style={{ display: "inline-block" }}>{task?.text}</p>
      )}
      <button
        onClick={() => {
          setEditMode(!editMode);
          onEditTask(newTask);
        }}
      >
        {editMode ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(task?.id)}>Delete</button>
    </div>
  );
}
