import { useState } from "react";

export default function SearchSortBar({
  onSearch,
  onOpenFilter,
  onSortChange,
}) {
  const [q, setQ] = useState("");

  function handleSearch(e) {
    setQ(e.target.value);
    onSearch(e.target.value);
  }

  function handleSort(e) {
    const [field, dir] = e.target.value.split("|");
    onSortChange({ field, dir });
  }

  return (
    <div className="flex flex-col m-10 md:flex-row items-stretch md:items-center gap-2 mb-3">
      <input
        value={q}
        onChange={handleSearch}
        placeholder="Search by name, email, department..."
        className="flex-1 border-2 border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-gray-600"
      />

      <select
        onChange={handleSort}
        className="border-2 border-gray-500 w-48 rounded-md px-3 py-2 focus:outline-none focus:border-gray-600"
      >
        <option value="id|asc">Sort: ID ▲</option>
        <option value="id|desc">Sort: ID ▼</option>
        <option value="firstName|asc">Name ▲</option>
        <option value="firstName|desc">Name ▼</option>
        <option value="email|asc">Email ▲</option>
        <option value="email|desc">Email ▼</option>
      </select>
      <button
        onClick={onOpenFilter}
        className="border-2 border-gray-500 px-3 py-2 rounded-md"
      >
        Filters
      </button>
    </div>
  );
}
