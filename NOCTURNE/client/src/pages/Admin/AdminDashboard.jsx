import AdminLayout from "../../components/admin/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-5xl font-bold mb-10">
        The Vault
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-zinc-500">
            Total Artifacts
          </h3>

          <p className="text-5xl font-bold mt-4">
            12
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-zinc-500">
            Collections
          </h3>

          <p className="text-5xl font-bold mt-4">
            5
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-zinc-500">
            Revenue
          </h3>

          <p className="text-5xl font-bold mt-4">
            ₹0
          </p>
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;