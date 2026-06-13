const CreateProduct = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Create Artifact
      </h1>

      <form className="max-w-2xl space-y-6">

        <input
          type="text"
          placeholder="Artifact Name"
          className="w-full bg-zinc-900 p-4 rounded-xl"
        />

        <textarea
          placeholder="Description"
          className="w-full bg-zinc-900 p-4 rounded-xl"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full bg-zinc-900 p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full bg-zinc-900 p-4 rounded-xl"
        />

        <button
          className="bg-[#C9A227] text-black px-8 py-4 rounded-xl font-bold"
        >
          Create Artifact
        </button>

      </form>
    </div>
  );
};

export default CreateProduct;
