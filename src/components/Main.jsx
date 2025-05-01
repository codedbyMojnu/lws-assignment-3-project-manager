import Header from "./Header";
import TaskList from "./TaskList";

export default function Main() {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <Header />
      <TaskList />
    </main>
  );
}
