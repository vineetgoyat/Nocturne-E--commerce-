import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Product/ProductDetail";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/artifact/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;