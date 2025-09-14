import React, { useState, useMemo } from "react";
import { dishes } from "../data/dishes";
import MenuTabs from "./MenuTabs";
import DishCard from "./DishCard";
import SearchFilters from "./SearchFilters";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("STARTER");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedDishes, setSelectedDishes] = useState([]);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesTab = dish.mealType === activeTab;
      const matchesSearch = dish.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "ALL" || dish.type === selectedType;
      return matchesTab && matchesSearch && matchesType;
    });
  }, [activeTab, searchQuery, selectedType]);

  const selectedCounts = useMemo(() => {
    return selectedDishes.reduce((counts, dish) => {
      counts[dish.mealType] = (counts[dish.mealType] || 0) + 1;
      return counts;
    }, {});
  }, [selectedDishes]);

  const handleDishSelect = (dish) => {
    setSelectedDishes((prev) => {
      const isSelected = prev.some((d) => d.id === dish.id);
      if (isSelected) {
        return prev.filter((d) => d.id !== dish.id);
      } else {
        return [...prev, dish];
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <MenuTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedCounts={selectedCounts}
      />

      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            onSelect={handleDishSelect}
            isSelected={selectedDishes.some((d) => d.id === dish.id)}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-lg font-medium text-gray-900">
            Total Selected: {selectedDishes.length} dishes
          </div>
          <button
            className={`px-6 py-2 rounded-md transition-colors ${
              selectedDishes.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={selectedDishes.length === 0}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
