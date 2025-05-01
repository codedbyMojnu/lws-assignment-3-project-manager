import ClearBtn from "../assets/svg/ClearBtn";
import { useTaskList } from "../context/TaskContext";

export default function Searchbar() {
  const { searchQuery, setSearchQuery } = useTaskList();
  return (
    <div className="mx-4 flex-1">
      <input
        type="text"
        placeholder="Search here"
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery && <ClearBtn setSearchQuery={setSearchQuery} />}
    </div>
  );
}
