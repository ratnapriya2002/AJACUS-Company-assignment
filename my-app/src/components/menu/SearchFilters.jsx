import React from "react";

const SearchFilters = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded-md border transition-colors ${
            selectedType === "ALL"
              ? "bg-blue-500 text-white border-blue-500"
              : "border-blue-500 text-blue-500 hover:bg-blue-50"
          }`}
          onClick={() => onTypeChange("ALL")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md border transition-colors ${
            selectedType === "VEG"
              ? "bg-green-500 text-white border-green-500"
              : "border-green-500 text-green-500 hover:bg-green-50"
          }`}
          onClick={() => onTypeChange("VEG")}
        >
          Veg
        </button>
        <button
          className={`px-4 py-2 rounded-md border transition-colors ${
            selectedType === "NON-VEG"
              ? "bg-red-500 text-white border-red-500"
              : "border-red-500 text-red-500 hover:bg-red-50"
          }`}
          onClick={() => onTypeChange("NON-VEG")}
        >
          Non-Veg
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
