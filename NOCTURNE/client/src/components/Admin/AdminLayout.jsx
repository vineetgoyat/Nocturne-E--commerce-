const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-zinc-800 p-8">
        <h1 className="text-3xl font-bold text-[#C9A227]">
          NOCTURNE
        </h1>

        <p className="text-zinc-500 mt-2">
          Admin Vault
        </p>

        <nav className="mt-12 space-y-6">
          <div className="cursor-pointer hover:text-[#C9A227]">
            Dashboard
          </div>

          <div className="cursor-pointer hover:text-[#C9A227]">
            Artifacts
          </div>

          <div className="cursor-pointer hover:text-[#C9A227]">
            Collections
          </div>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;