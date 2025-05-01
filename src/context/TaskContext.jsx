import { createContext, useContext, useReducer, useState } from "react";
import taskReducer from "../reducer/taskReducer";
import { tasksData } from "./../data/tasksData";

const TaskContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <TaskContext.Provider
      value={{ tasks, dispatch, searchQuery, setSearchQuery }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskList() {
  return useContext(TaskContext);
}
