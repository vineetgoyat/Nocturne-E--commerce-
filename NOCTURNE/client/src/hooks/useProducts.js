import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return {
    products,
    loading,
  };
};

export default useProducts;