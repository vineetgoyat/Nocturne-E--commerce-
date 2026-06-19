import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);

  const [products, setProducts] = useState([]);

  const [orders, setOrders] = useState([]);

  const totalRevenue = orders.reduce(
  (acc, order) => acc + order.totalAmount,
  0
);

const deliveredOrders = orders.filter(
  (order) => order.status === "Delivered"
).length;

  const [editingProduct, setEditingProduct] =
    useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/admin/login");
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

  const fetchOrders = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/orders"
    );

    setOrders(res.data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const updateOrderStatus = async (
  orderId,
  status
) => {
  try {
    await axios.put(
      `http://localhost:8000/api/orders/${orderId}`,
      {
        status,
      }
    );

    fetchOrders();
  } catch (error) {
    console.log(error);
  }
};

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = formData.image;

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

      if (editingProduct) {
        await axios.put(
          `http://localhost:8000/api/products/${editingProduct._id}`,
          {
            ...formData,
            image: imageUrl,
          }
        );

        alert("Artifact Updated");
      } else {
        await axios.post(
          "http://localhost:8000/api/products",
          {
            ...formData,
            image: imageUrl,
          }
        );

        alert("Artifact Created");
      }

      fetchProducts();

      setEditingProduct(null);

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
      alert("Operation Failed");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-8 pt-40 pb-20">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-12">
  <h1 className="text-6xl">
    Admin Dashboard
  </h1>

  <div className="grid md:grid-cols-4 gap-6 mb-16">

  <div
    className="
      border
      border-zinc-800
      rounded-2xl
      p-6
      bg-[#111111]
    "
  >
    <p className="text-zinc-500">
      Revenue
    </p>

    <h2 className="text-3xl mt-2 text-[#C9A227]">
      ₹ {totalRevenue}
    </h2>
  </div>

  <div
    className="
      border
      border-zinc-800
      rounded-2xl
      p-6
      bg-[#111111]
    "
  >
    <p className="text-zinc-500">
      Orders
    </p>

    <h2 className="text-3xl mt-2">
      {orders.length}
    </h2>
  </div>

  <div
    className="
      border
      border-zinc-800
      rounded-2xl
      p-6
      bg-[#111111]
    "
  >
    <p className="text-zinc-500">
      Products
    </p>

    <h2 className="text-3xl mt-2">
      {products.length}
    </h2>
  </div>

  <div
    className="
      border
      border-zinc-800
      rounded-2xl
      p-6
      bg-[#111111]
    "
  >
    <p className="text-zinc-500">
      Delivered
    </p>

    <h2 className="text-3xl mt-2 text-green-500">
      {deliveredOrders}
    </h2>
  </div>

</div>

  <button
    onClick={handleLogout}
    className="
      px-6
      py-3
      border
      border-red-500
      text-red-500
      rounded-xl
      hover:bg-red-500
      hover:text-white
      transition-all
    "
  >
    Logout
  </button>
</div>

        {/* Create / Edit Artifact */}

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
            {editingProduct
              ? "Edit Artifact"
              : "Create Artifact"}
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

            <div className="flex items-center">
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
                {editingProduct
                  ? "Update Artifact"
                  : "Create Artifact"}
              </button>

              {editingProduct && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingProduct(null);

                    setFormData({
                      title: "",
                      description: "",
                      price: "",
                      category: "",
                      image: "",
                    });

                    setImageFile(null);
                  }}
                  className="
                    ml-4
                    px-8
                    py-4
                    border
                    border-zinc-700
                    rounded-xl
                  "
                >
                  Cancel
                </button>
              )}
            </div>

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

                  <div className="flex gap-3 mt-4">

                    <button
                      onClick={() =>
                        handleEdit(product)
                      }
                      className="
                        px-4
                        py-2
                        border
                        border-[#C9A227]
                        text-[#C9A227]
                        rounded-xl
                        hover:bg-[#C9A227]
                        hover:text-black
                        transition-all
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(product._id)
                      }
                      className="
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
              </div>
            ))}
          </div>
        </div>
        {/* Orders Management */}

<div className="mt-24">
  <h2 className="text-4xl mb-8">
    Customer Orders
  </h2>

  <div
    className="
      border
      border-zinc-800
      rounded-3xl
      overflow-hidden
      bg-[#111111]
    "
  >
    <table className="w-full">

      <thead className="bg-[#0a0a0a]">
        <tr>
          <th className="p-4 text-left">
            Customer
          </th>

          <th className="p-4 text-left">
            Email
          </th>

          <th className="p-4 text-left">
            Amount
          </th>

          <th className="p-4 text-left">
            Status
          </th>
        </tr>
      </thead>

      <tbody>

        {orders.map((order) => (
          <tr
            key={order._id}
            className="border-t border-zinc-800"
          >
            <td className="p-4">
              {order.customerName}
            </td>

            <td className="p-4">
              {order.customerEmail}
            </td>

            <td className="p-4 font-semibold text-[#C9A227]">
              ₹ {order.totalAmount}
            </td>

            <td className="p-4">

  <select
    value={order.status}
    onChange={(e) =>
      updateOrderStatus(
        order._id,
        e.target.value
      )
    }
    className={`
  px-3
  py-2
  rounded-lg
  border
  ${
    order.status === "Pending"
      ? "border-yellow-500 text-yellow-500"
      : order.status === "Processing"
      ? "border-blue-500 text-blue-500"
      : order.status === "Shipped"
      ? "border-purple-500 text-purple-500"
      : "border-green-500 text-green-500"
  }
  bg-black
`}
  >
    <option value="Pending">
      Pending
    </option>

    <option value="Processing">
      Processing
    </option>

    <option value="Shipped">
      Shipped
    </option>

    <option value="Delivered">
      Delivered
    </option>

  </select>

</td>
          </tr>
        ))}

      </tbody>

    </table>
  </div>
</div>

      </div>
    </section>
  );
};

export default AdminDashboard;