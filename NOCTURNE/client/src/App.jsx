import { Routes, Route } from "react-router-dom";

import Vault from "./pages/Vault/Vault";

import MainLayout from "./components/layout/MainLayout";

import AdminDashboard from "./pages/Admin/AdminDashboard";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Product/ProductDetail";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Vault />} /> 
        <Route path="/admin" element={<AdminDashboard />}/>

        <Route
          path="/artifact/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;