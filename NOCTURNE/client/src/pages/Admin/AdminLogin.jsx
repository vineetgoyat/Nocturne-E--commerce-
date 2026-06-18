import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/admin");

    } catch (error) {
      alert("Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-[#111111]
          border
          border-zinc-800
          p-8
          rounded-3xl
        "
      >
        <h1 className="text-4xl mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            bg-black
            border
            border-zinc-800
            p-4
            rounded-xl
            mb-4
          "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="
            w-full
            bg-black
            border
            border-zinc-800
            p-4
            rounded-xl
            mb-6
          "
        />

        <button
          type="submit"
          className="
            w-full
            py-4
            bg-[#C9A227]
            text-black
            rounded-xl
          "
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;