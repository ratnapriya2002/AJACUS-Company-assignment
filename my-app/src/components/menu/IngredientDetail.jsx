import React from "react";
import { useParams, Link } from "react-router-dom";
import { dishes } from "../data/dishes";

const IngredientDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return <div className="text-center p-8 text-gray-600">Dish not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
      <Link
        to="/"
        className="inline-block mb-8 text-blue-500 hover:text-blue-600 transition-colors"
      >
        ← Back to Menu
      </Link>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{dish.name}</h2>
        <p className="text-gray-600">{dish.description}</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Ingredients:</h3>
        <ul className="space-y-2">
          {dish.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="py-2 border-b border-gray-200 last:border-0"
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IngredientDetail;
