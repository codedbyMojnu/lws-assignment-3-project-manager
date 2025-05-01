import TaskProvider from "./context/TaskContext";
import Page from "./Page";

export default function App() {
  return (
    <TaskProvider>
      <Page />
    </TaskProvider>
  );
}
