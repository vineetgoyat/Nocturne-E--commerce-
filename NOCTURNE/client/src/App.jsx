import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home/Home";
import Vault from "./pages/Vault/Vault";
import ProductDetail from "./pages/Product/ProductDetail";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <MainLayout>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/vault"
          element={<Vault />}
        />

        <Route
          path="/artifact/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </MainLayout>
  );
}

export default App;