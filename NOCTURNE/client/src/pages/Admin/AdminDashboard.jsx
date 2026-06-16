import { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

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

            {/* Image Upload */}

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
                  border
                  border-zinc-800
                  p-4
                  rounded-xl
                  bg-black
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

      </div>
    </section>
  );
};

export default AdminDashboard;