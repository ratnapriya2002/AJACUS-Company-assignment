import React from "react";
import { Link } from "react-router-dom";

const DishCard = ({ dish, onSelect, isSelected }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <img
        src={dish.image || "default-dish-image.jpg"}
        alt={dish.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <div className="flex gap-4 mb-3">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              isSelected
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => onSelect(dish)}
          >
            {isSelected ? "Remove" : "Add"}
          </button>
          <Link
            to={`/ingredients/${dish.id}`}
            className="px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
          >
            Ingredients
          </Link>
        </div>
        <span
          className={`inline-block px-2 py-1 rounded-md text-sm ${
            dish.type === "VEG"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {dish.type}
        </span>
      </div>
    </div>
  );
};

export default DishCard;
