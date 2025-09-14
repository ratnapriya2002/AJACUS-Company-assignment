import { useState } from "react";
import dishes from "../data/dishes";
import { useNavigate } from "react-router-dom";

function Home() {
  const [activeTab, setActiveTab] = useState("MAIN COURSE");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const filteredDishes = dishes.filter((dish) => {
    const matchTab = dish.mealType === activeTab;
    const matchSearch = dish.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "ALL" ? true : dish.type === filter;
    return matchTab && matchSearch && matchFilter;
  });

  const getCount = (tab) => selected.filter((d) => d.mealType === tab).length;

  const toggleSelect = (dish) => {
    if (selected.some((d) => d.id === dish.id)) {
      setSelected(selected.filter((d) => d.id !== dish.id));
    } else {
      setSelected([...selected, dish]);
    }
  };

  const handleContinue = () => {
    navigate("/ingredient", { state: { selected } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <h1 className="text-3xl font-bold text-center py-6 text-orange-600">
        🍽️ Party Menu Selection
      </h1>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["STARTER", "MAIN COURSE", "DESSERT", "SIDES"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full shadow-md transition-all flex items-center gap-2 ${
              activeTab === tab
                ? "bg-orange-500 text-white scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
            {getCount(tab) > 0 && (
              <span className="bg-white text-orange-600 px-2 py-0.5 rounded-full text-xs shadow">
                {getCount(tab)}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8 flex-wrap px-4">
        <input
          type="text"
          placeholder=" Search dish..."
          className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {["ALL", "VEG", "NON-VEG"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${
              filter === f
                ? "bg-green-500 text-white scale-105"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={
                    dish.image ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={dish.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-1">{dish.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {dish.description}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  {dish.type} | {dish.category.name}
                </p>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => toggleSelect(dish)}
                    className={`flex-1 py-2 rounded-lg font-medium shadow-md transition ${
                      selected.some((d) => d.id === dish.id)
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    {selected.some((d) => d.id === dish.id) ? "Remove" : "Add"}
                  </button>
                  <button
                    onClick={() => navigate(`/ingredient/${dish.id}`)}
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg font-medium shadow-md hover:bg-blue-600"
                  >
                    Ingredients
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 p-4 bg-white shadow-lg flex justify-between items-center mt-6">
        <p className="font-medium text-gray-700">
          {selected.length} items selected
        </p>
      </div>
    </div>
  );
}

export default Home;
