import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
