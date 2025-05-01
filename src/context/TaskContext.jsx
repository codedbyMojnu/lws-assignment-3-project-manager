import { createContext, useContext, useReducer } from "react";
import taskReducer from "../reducer/taskReducer";
import { tasksData } from "./../data/tasksData";

const TaskContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskList() {
  return useContext(TaskContext);
}
