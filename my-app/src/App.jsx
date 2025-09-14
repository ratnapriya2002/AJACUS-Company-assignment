import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Ingredient from "./components/pages/Ingredient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredient/:id" element={<Ingredient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
