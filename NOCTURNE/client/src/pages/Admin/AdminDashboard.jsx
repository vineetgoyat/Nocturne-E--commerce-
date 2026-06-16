import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);

  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

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

        imageUrl =
          uploadRes.data.imageUrl;
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
      alert("Failed To Create Artifact");
    }
  };

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
          {/* Form for creating artifact can be added here */}
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