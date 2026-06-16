const AdminDashboard = () => {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-32">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl mb-12">
          Admin Dashboard
        </h1>

        <div
          className="
            border
            border-zinc-800
            rounded-3xl
            p-10
            bg-[#111111]
          "
        >
          <h2 className="text-3xl mb-8">
            Create Artifact
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Title"
              className="
                w-full
                bg-black
                border
                border-zinc-800
                p-4
                rounded-xl
              "
            />

            <textarea
              placeholder="Description"
              className="
                w-full
                bg-black
                border
                border-zinc-800
                p-4
                rounded-xl
                h-40
              "
            />

            <input
              type="number"
              placeholder="Price"
              className="
                w-full
                bg-black
                border
                border-zinc-800
                p-4
                rounded-xl
              "
            />

            <input
              type="text"
              placeholder="Category"
              className="
                w-full
                bg-black
                border
                border-zinc-800
                p-4
                rounded-xl
              "
            />

            <button
              type="submit"
              className="
                px-8
                py-4
                bg-[#C9A227]
                text-black
                rounded-xl
              "
            >
              Create Artifact
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;