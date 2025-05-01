import ClearBtn from "../assets/svg/ClearBtn";

export default function Searchbar({ onSearch, onSearchReset, searchText }) {
  return (
    <div className="mx-4 flex-1">
      <input
        type="text"
        placeholder="Search here"
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        onChange={(e) => onSearch(e)}
      />
      {searchText && (
        <div onClick={onSearchReset}>
          <ClearBtn />
        </div>
      )}
    </div>
  );
}
