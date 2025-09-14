import React from "react";

const MenuTabs = ({ activeTab, onTabChange, selectedCounts }) => {
  const tabs = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="flex gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md relative transition-colors ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
          {selectedCounts[tab] > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {selectedCounts[tab]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
