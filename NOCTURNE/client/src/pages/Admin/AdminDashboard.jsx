import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);

  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] =
  useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleEdit = (product) => {
  setEditingProduct(product);

  setFormData({
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    image: product.image,
  });
};

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/products/${id}`
      );

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (imageFile) {
        const imageData = new FormData();

        imageData.append(
          "image",
          imageFile
        );

        const uploadRes = await axios.post(
          "http://localhost:8000/api/upload",
          imageData
        );

        imageUrl = uploadRes.data.imageUrl;
      }

      await axios.post(
        "http://localhost:8000/api/products",
        {
          ...formData,
          image: imageUrl,
        }
      );

      alert("Artifact Created");

      fetchProducts();

      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });

      setImageFile(null);

    } catch (error) {
  console.log(error);

  console.log(
    error.response?.data ||
    error.message
  );

  alert(
    error.response?.data?.message ||
    error.message
  );
}
  };

  return (
    <section className="min-h-screen bg-black text-white px-8 py-32">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl mb-12">
          Admin Dashboard
        </h1>

        {/* Create Artifact */}

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

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              name="description"
              value={formData.description}
              onChange={handleChange}
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
              name="price"
              value={formData.price}
              onChange={handleChange}
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
              name="category"
              value={formData.category}
              onChange={handleChange}
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

            <div>
              <label className="block mb-2 text-zinc-400">
                Upload Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImageFile(e.target.files[0])
                }
                className="
                  w-full
                  bg-black
                  border
                  border-zinc-800
                  p-4
                  rounded-xl
                "
              />
            </div>

            <button
              type="submit"
              className="
                px-8
                py-4
                bg-[#C9A227]
                text-black
                rounded-xl
                hover:opacity-90
                transition-all
              "
            >
              Create Artifact
            </button>
          </form>
        </div>

        {/* Manage Artifacts */}

        <div className="mt-20">
          <h2 className="text-4xl mb-8">
            Manage Artifacts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="
                  border
                  border-zinc-800
                  rounded-2xl
                  overflow-hidden
                  bg-[#111111]
                "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl">
                    {product.title}
                  </h3>

                  <p className="text-[#C9A227] mt-2">
                    ₹ {product.price}
                  </p>

                  <button
                    onClick={() =>
                      handleDelete(product._id)
                    }
                    className="
                      mt-4
                      px-4
                      py-2
                      border
                      border-red-500
                      text-red-500
                      rounded-xl
                      hover:bg-red-500
                      hover:text-white
                      transition-all
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;