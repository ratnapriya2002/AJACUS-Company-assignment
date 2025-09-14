import { useParams, useNavigate } from "react-router-dom";
import dishes from "../data/dishes";

function Ingredient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-medium text-gray-600"> Dish not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-6 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-700 hover:text-orange-600 transition"
      >
        Back to Menu
      </button>

      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden">
        <img
          src={
            dish.image || "https://via.placeholder.com/800x400?text=No+Image"
          }
          alt={dish.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-2">
            {dish.name}
          </h2>
          <p className="text-gray-700 mb-4">{dish.description}</p>
          <p className="text-sm text-gray-500 mb-6">
            {dish.type} | {dish.category.name}
          </p>

          <h3 className="text-xl font-semibold mb-3">🧾 Ingredients</h3>
          {dish.ingredients && dish.ingredients.length > 0 ? (
            <ul className="space-y-2">
              {dish.ingredients.map((ing, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-50 transition"
                >
                  <span className="text-green-600 font-bold">✔</span>
                  <span className="text-gray-700">
                    {ing.name} –{" "}
                    <span className="text-gray-500">{ing.quantity}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">
              No ingredient data available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ingredient;
